import axios from "axios"
// import { API_URL } from "./constants"


const API_URL = "http://numbersapi.com"
export async function getNumberFunFact(num){
    try {
        const url = `${API_URL}/${num}?json`
        
        const response = await axios.get(url)
        console.log(response.data) 
        return response["data"]
    } catch (error) {
        // console.log(error.ERR_CODE)
        console.log(error.message)
    }
}

(async () => {
    const sone = getNumberFunFact(2)
})()