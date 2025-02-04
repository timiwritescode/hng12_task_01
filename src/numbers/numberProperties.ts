import axios from "axios";
import { NumbersExternalAPIData } from "./dto/externalApiDataSchema";
import { config } from 'dotenv';


config({path: ".env"})

export class NumberProperties {
    private num: number;
    
    constructor (numberInput: number) {
        this.num = numberInput;
        
        
    }

    getNum(): number {
        return this.num;
    }

    isNumPrime(): boolean {
        if (this.num <= 1) return false;

        for (let i = 1; i < this.num; i++) {
            if (i == 0) {
                continue
            }
            if (this.num % i == 0 && 
                (i != 1)) return false;
        }

        return true
    }

    isNumPerfect(): boolean {
        if (this.num < 1) {
            return false
        }
        let sumOfFactors = 0
        for (let i = 0; i < this.num; i++) { 
            if (i > this.num / 2) {
                break;
            }
            if (this.num % i == 0) {
                sumOfFactors += i
            }
        }

        return sumOfFactors === this.num;
    }


    getProperties(): string[] {
        const numberProperties = []
        const oddOrEven = this.isNumberEven(this.num) ? "even" : "odd";
        
        if (this.isArmstrongNumber()) {
            numberProperties.push("armstrong")
        }
        numberProperties.push(oddOrEven)
        return numberProperties;

    }

    getDigitSum(): number{
        const stringifiedDigits = this.num < 0 ? "" + Math.abs(this.num): "" + this.num
        let totalNumber = 0;
        
        for (let digit of stringifiedDigits) {
            totalNumber += Number.parseInt(digit)
        }

        return this.num < 0 ? totalNumber - (totalNumber * 2) : totalNumber;
    }

    async getNumFunFact(): Promise<string> {
        const apiResponse = await this.getFunFactFromExternalAPI();
        return apiResponse.text            

    }

    private isNumberEven(number: number): boolean {
        return number < 0 ? Math.abs(number) % 2 == 0 : number % 2 == 0
    }

    private isArmstrongNumber(): boolean {
        const stringifiedNumber = "" + Math.abs(this.num); // the absolute to handle negative numbers
        const power = stringifiedNumber.length;
        let totalNumber = 0;
        for (let stringNum of stringifiedNumber) {

            totalNumber += parseInt(stringNum) ** power
            
        }
        return totalNumber == Math.abs(this.num);
    }

    private async getFunFactFromExternalAPI(): Promise<NumbersExternalAPIData>{
        const API_URL = process.env.API_URL
        const url = `${API_URL}/${this.num}/math?json`
        const response = await axios.get(url)

        return new NumbersExternalAPIData(response)            

    }
 }