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
        return;
    }

    getNumDigitSum(): number{
        return
    }

    async getNumFunFact(): Promise<string> {
        const apiResponse = await getNumberFunFact(this.num);
        return apiResponse.text
    }
}