import json
import logging

logger = logging.getLogger()
logger.setLevel(logging.INFO)

def lambda_handler(event, context):
    try:
        # SNS messages are wrapped in Records
        record = event.get('Records', [])[0]
        sns_message = record.get('Sns', {}).get('Message', '')
        # Parse the JSON string from the SNS message
        alarm_payload = json.loads(sns_message)
        logger.info(f"Received alarm: {alarm_payload['AlarmName']} with state {alarm_payload['NewStateValue']}")
        # TODO: Add business logic to handle the alarm
        return {'status': 'success'}
    except Exception as e:
        logger.exception("Failed to process SNS alarm message")
        raise
