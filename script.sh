curl --location 'http://localhost:3000/tick' \
--header 'Content-Type: application/json' \
--data '{
    "channel_id": "01950183-8235-7b80-a9c8-8eb2a4632619",
    "return_url": "https://ping.telex.im/v1/return/01950183-8235-7b80-a9c8-8eb2a4632619",
    "settings": [
        {
            "label": "site-1",
            "type": "text",
            "required": true,
            "default": "https://google.com"
        },
        {
            "label": "site-2",
            "default": "https://www.somefakewebsitethatisfake.com",
            "type": "text",
            "required": true
        },
        {
            "label": "interval",
            "type": "text",
            "required": true,
            "default": "* * * * *"
        }
    ]
}'