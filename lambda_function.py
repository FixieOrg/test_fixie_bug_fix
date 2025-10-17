import json
import logging

logger = logging.getLogger()
logger.setLevel(logging.INFO)

def lambda_handler(event, context):
    try:
        # Detect SNS event
        if 'Records' in event and event['Records'][0]['EventSource'] == 'aws:sns':
            sns_message = event['Records'][0]['Sns']['Message']
            # The message is a JSON string; parse it
            alarm = json.loads(sns_message)
            logger.info(f"Received alarm: {alarm['AlarmName']} with state {alarm['NewStateValue']}")
            # Process the alarm as needed
            return {'status': 'processed', 'alarmName': alarm['AlarmName']}
        else:
            # Handle other event types or raise an informative error
            raise ValueError('Unsupported event type')
    except Exception as e:
        logger.exception('Error processing SNS event')
        # Raise a RuntimeError with a clear message instead of the raw event
        raise RuntimeError(f'Failed to process SNS event: {e}')
