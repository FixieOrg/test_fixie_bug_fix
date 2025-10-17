import json
import os
import logging

logger = logging.getLogger()
logger.setLevel(logging.INFO)

# Validate required environment variable
FIXIE_API_KEY = os.getenv("FIXIE_API_KEY")
if not FIXIE_API_KEY:
    raise RuntimeError("Missing required environment variable: FIXIE_API_KEY")


def lambda_handler(event, context):
    try:
        # SNS event structure
        record = event.get("Records", [])[0]
        sns_message = record.get("Sns", {}).get("Message", "{}")
        alarm = json.loads(sns_message)

        alarm_name = alarm.get("AlarmName")
        new_state = alarm.get("NewStateValue")
        logger.info(f"Received alarm {alarm_name} with state {new_state}")

        # Example: trigger Fixie agent when alarm is ALARM
        if new_state == "ALARM":
            # Call Fixie agent (pseudo-code)
            # fixie.trigger(alarm_name)
            logger.info(f"Triggering Fixie agent for {alarm_name}")

        return {"statusCode": 200, "body": "Processed"}
    except Exception as e:
        logger.exception("Error processing SNS event")
        raise
