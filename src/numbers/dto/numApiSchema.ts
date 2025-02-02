import { AxiosResponse } from "axios";

export class NumbersAPiResponse {
    text: string;
    number: Number;

    constructor (private apiResponse: AxiosResponse) {
        this.text = apiResponse.data.text;
        this.number = apiResponse.data.number
    }
}