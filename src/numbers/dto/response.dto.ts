import { NumberInput } from "../number";

export class ResponseDto {
    number: number;
    is_prime: boolean;
    is_perfect: boolean;
    // properties: string[];
    // digit_sum: number;
    // fun_fact: string;

    constructor(num: NumberInput) {
        this.number = num.getNum();
        this.is_prime = num.isNumPrime();
        // this.digit_sum = num.getNumDigitSum();
        // this.fun_fact = await num.getNumFunFact()
    }
}