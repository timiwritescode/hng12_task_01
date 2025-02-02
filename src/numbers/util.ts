import axios from "axios"
import { API_URL } from "./constants"
import { NumbersAPiResponse } from "./dto/api_response_dto"

export async function getNumberFunFact(num: number):  Promise<NumbersAPiResponse>{
    try {
        const url = `${API_URL}/${num}?json`
        
        const response = await axios.get(url)

        return new NumbersAPiResponse(response)
    } catch (error) {
        throw error
    }
}


export function getPerfectNumber(): boolean {
    return ;

}

export function getPrimeNumber(): boolean {
    return
}

