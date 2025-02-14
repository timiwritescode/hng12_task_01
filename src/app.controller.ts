import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req } from '@nestjs/common';
import { AppService, MonitorPayload } from './app.service';
// import {Request} from 'express'
@Controller()
export class AppController {
    constructor(private appService: AppService) {}


    @Get("integration")
    async get_integration_json(
        @Req()
        req: Request
    ) {
        const baseUrl = `${req["protocol"]}://${req.headers["host"]}`

        return {
            "data": {
                "descriptions": {
                    "app_name": "Uptime Monitor",
                    "app_description": "Monitors website uptime",
                    "app_url": baseUrl,
                    "app_logo": "https://i.imgur.com/lZqvffp.png",
                    "background_color": "#fff"
                },
                "integration_type": "interval",
                "settings": [
                    {"label": "site-1", "type": "text", "required": true, "default": ""},
                    {"label": "site-2", "type": "text", "required": true, "default": ""},
                    {"label": "interval", "type": "text", "required": true, "default": "* * * * *"}
                ],
                "tick_url": `${baseUrl}/tick`
            }
        
    }
}

    @Post("/tick")
    @HttpCode(HttpStatus.ACCEPTED)
    async monitor(
        @Body() 
        payload: MonitorPayload) {
            setImmediate(() => this.appService.monitor_task(payload))
            // console.log(payload)
            return {status: "accepted"}
        }

    

}
