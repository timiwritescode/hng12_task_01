import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req } from '@nestjs/common';
import { AppService, MonitorPayload } from './app.service';
// import {Request} from 'express'
@Controller()
export class AppController {
    constructor(private appService: AppService) {}


    @Get("integration.json")
    async get_integration_json(
        @Req()
        req: Request
    ) {
        const baseUrl = `${req["protocol"]}://${req.headers["host"]}`

        return {
            "data": {
                "date": {
                    "created_at": "2025-02-14",
                    "updated_at": "2025-02-14"
                },
                "descriptions": {
                    "app_name": "Uptime Monitor",
                    "app_description": "Monitors website uptime",
                    "app_url": baseUrl,
                    "app_logo": "https://i.imgur.com/lZqvffp.png",
                    "background_color": "#fff"
                },
                "integration_category": "Monitoring & Logging",
                "integration_type": "interval",
                "is_active": true,
                "key_features": ["checks the health of site"],
                "permission": {
                    "monitoring_user": {
                        "always_online": true,
                        "display_name": "Custom Performance Monitor"
                    }
                },
                "settings": [
                    {"label": "site-1", "type": "text", "required": true, "default": ""},
                    {"label": "site-2", "type": "text", "required": true, "default": ""},
                    {"label": "interval", "type": "text", "required": true, "default": "* * * * *"}
                ],
                "tick_url": `${baseUrl}/tick`,
                "target_url": `${baseUrl}/tick`,
                // "target_url": `https://ping.telex.im/v1/return/01950183-8235-7b80-a9c8-8eb2a4632619`,
                "return_url": "https://ping.telex.im/v1/return/01950183-8235-7b80-a9c8-8eb2a4632619"
            }
        
    }
}

    @Post("/tick")
    @HttpCode(HttpStatus.ACCEPTED)
    async monitor(
        @Body() 
        payload: any,
    @Req() req) {
            
            await this.appService.monitor_task(payload)
            // console.log(payload)
            console.log(req.body)
            console.log(req)
            console.log(payload)
            return {status: "accepted"}
        }

    

}
