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
        # Parse the JSON string inside the SNS message
        message = json.loads(message_str)
        alarm_name = message.get('AlarmName')
        new_state = message.get('NewStateValue')
        logger.info(f"Alarm {alarm_name} is in state {new_state}")
        # Add your business logic here
        return {'status': 'success', 'alarm': alarm_name, 'state': new_state}
    except Exception as e:
        logger.exception("Failed to process SNS event")
        raise
