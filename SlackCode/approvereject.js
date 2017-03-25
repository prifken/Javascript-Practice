{
    "text": "Incoming message from Quickbase:",
    "attachments": [
        {
            "text": "Do you approve of this note?",
            "fallback": "You are unable to choose a game",
            "callback_id": "wopr_game",
            "color": "#3AA3E3",
            "attachment_type": "default",
            "actions": [
                {
                    "name": "game",
                    "text": "Approve",
                    "type": "button",
                    "value": "approve"
                },
                {
                    "name": "game",
                    "text": "Reject",
                    "type": "button",
                    "value": "reject"
                },
                {
                    "name": "game",
                    "text": "Thermonuclear War",
                    "style": "danger",
                    "type": "button",
                    "value": "war",
                    "confirm": {
                        "title": "Are you sure?",
                        "text": "Wouldn't you prefer a good game of chess?",
                        "ok_text": "Yes",
                        "dismiss_text": "No"
                    }
                }
            ]
        }
    ]
}


