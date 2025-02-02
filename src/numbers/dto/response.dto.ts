import { NumberInput } from "../number";

export class ResponseDto {
    number: number;
    is_prime: boolean;
    is_perfect: boolean;
    // properties: string[];
    // digit_sum: number;
    fun_fact: string;

    private constructor(
        num: number, 
        is_prime: boolean,
        fun_fact: string) {
        this.number = num;
        this.is_prime = is_prime;
        // this.digit_sum = num.getNumDigitSum();
        this.fun_fact = fun_fact
    }

    static async create(num: NumberInput) {
        const number = num.getNum();
        const is_prime = num.isNumPrime();
        const fun_fact = await num.getNumFunFact();

        return new ResponseDto(number, is_prime, fun_fact)
    }
}