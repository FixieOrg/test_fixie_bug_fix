import json


def lambda_handler(event, context):
    try:
        # SNS event structure
        record = event.get('Records', [])[0]
        sns_message = record.get('Sns', {}).get('Message', '')
        # Parse the JSON string from SNS
        alarm_payload = json.loads(sns_message)
        alarm_name = alarm_payload.get('AlarmName')
        new_state = alarm_payload.get('NewStateValue')
        # Process the alarm (example: log or trigger Fixie agent)
        print(f"Alarm {alarm_name} changed to {new_state}")
        # ... additional logic ...
    except Exception as e:
        print(f"Error processing SNS message: {e}")
        raise
