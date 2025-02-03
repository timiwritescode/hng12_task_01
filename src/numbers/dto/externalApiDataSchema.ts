import { AxiosResponse } from "axios";


interface NumbersApiData {
    text: string;
    number: number;
}

export class NumbersExternalAPIData {
    text: string;
    number: Number;

    constructor (private apiResponse: AxiosResponse<NumbersApiData>) {
        this.text = apiResponse.data.text;
        this.number = apiResponse.data.number
    }
}