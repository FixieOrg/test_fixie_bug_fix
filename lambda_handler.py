import json
import logging

logger = logging.getLogger()
logger.setLevel(logging.INFO)

def lambda_handler(event, context):
    try:
        # SNS event contains a list of records
        record = event.get('Records', [])[0]
        sns = record.get('Sns', {})
        message_str = sns.get('Message', '')
        if not message_str:
            raise ValueError('SNS message is empty')
        # The CloudWatch alarm payload is a JSON string
        alarm = json.loads(message_str)
        alarm_name = alarm.get('AlarmName')
        state = alarm.get('NewStateValue')
        reason = alarm.get('NewStateReason')
        logger.info(f"Alarm {alarm_name} changed to {state}: {reason}")
        # TODO: Add business logic here (e.g., trigger Fixie agent)
        return {'status': 'success', 'alarm': alarm_name, 'state': state}
    except Exception as e:
        logger.exception('Error processing SNS alarm')
        raise
