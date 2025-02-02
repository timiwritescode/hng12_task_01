import { getNumberFunFact } from "./util";

class NumberInput {
    private num: number;
    
    constructor (numberInput: number) {
        this.num = numberInput;
        
        
    }

    getNum(): number {
        return this.num
    }

    is_num_prime(): boolean {
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

    is_num_perfect(): boolean {
        return;
    }

    get_num_digit_sum(): number{
        return
    }

    async get_num_fun_fact(): Promise<string> {
        const apiResponse = await getNumberFunFact(this.num);
        return apiResponse.text
    }
}