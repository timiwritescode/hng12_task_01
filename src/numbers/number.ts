import { getNumberFunFact } from "./util";

export class NumberInput {
    private num: number;
    
    constructor (numberInput: number) {
        this.num = numberInput;
        
        
    }

    getNum(): number {
        return this.num
    }

    isNumPrime(): boolean {
        if (this.num === 0) return false;

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


    getProperties() {
        const numberProperties = []
        const oddOrEven = NumberInput.isNumberEven(this.num) ? "even" : "odd";
        
        if (NumberInput.isArmstrongNumber(this.num)) {
            numberProperties.push("armstrong")
        }
        numberProperties.push(oddOrEven)
        return numberProperties;

    }

    getDigitSum(): number{
        const stringifiedDigits = "" + this.num
        let totalNumber = 0;

        for (let digit of stringifiedDigits) {
            totalNumber += Number.parseInt(digit)
        }

        return totalNumber;
    }

    async getNumFunFact(): Promise<string> {
        const apiResponse = await getNumberFunFact(this.num);
        return apiResponse.text
    }

    static isNumberEven(number: number): boolean {
        return number < 0 ? Math.abs(number) % 2 == 0 : number % 2 == 0
    }

    static isArmstrongNumber(number: number): boolean {
        const stringifiedNumber = "" + number;
        const power = stringifiedNumber.length;
        let totalNumber = 0;
        for (let stringNum of stringifiedNumber) {
            totalNumber += parseInt(stringNum) ** power

        }
        return totalNumber == number;
    }
 }