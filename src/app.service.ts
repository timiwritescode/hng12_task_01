import { Injectable } from "@nestjs/common";
import axios from "axios";


export interface Setting {
    label: string;
    type: string;
    required: boolean;
    default: string;
}

export interface MonitorPayload {
    channel_id: string
    return_url: string
    settings: Setting[]
}

@Injectable()
export class AppService {
    async check_site_status(site: string) {
        try {
            const response = await axios.get(site, {
                timeout: 10000
            })
            
            if (response.status < 400) {
                return null
            }
            console.log(response.status)

            return `${site} is down (status ${response.status})`
        } catch (error) {
            return `${site} check failed: ${error.message}`
        }
    }


    async monitor_task(payload: MonitorPayload) {
        const sites = []
        payload.settings.forEach(setting => {
            if (setting.label.startsWith("site")) {
                sites.push(setting.default)
            }
        })
        
        const results = []
        for (const site of sites) {
            results.push(await this.check_site_status(site))
        }

        
        let message = ""
        for (const result of results) {
           if (result) message += result + "\n";
            
        }

        
        const data = {
            "message": message,
            "username": "Uptime Monitor",
            "event_name": "Uptime check",
            "status": "error"
        }

        await axios.post(payload.return_url, data)
        
    }
}