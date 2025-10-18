import json
import logging

logger = logging.getLogger()
logger.setLevel(logging.INFO)

def lambda_handler(event, context):
    try:
        # SNS event contains a list of records
        record = event.get('Records', [])[0]
        sns = record.get('Sns', {})
        # The Message field is a JSON string; parse it
        message_str = sns.get('Message', '')
        if not message_str:
            raise ValueError('SNS Message is empty')
        message = json.loads(message_str)
        alarm_name = message.get('AlarmName')
        new_state = message.get('NewStateValue')
        logger.info(f"Alarm {alarm_name} changed to {new_state}")
        # TODO: add business logic here
        return {'status': 'success', 'alarm': alarm_name, 'state': new_state}
    except Exception as e:
        logger.exception('Error processing SNS event')
        raise
