import { NumberInput } from "../number";

export class ResponseDto {
    number: number;
    is_prime: boolean;
    is_perfect: boolean;
    properties: string[];
    digit_sum: number;
    fun_fact: string;

    private constructor(
        num: number, 
        is_prime: boolean,
        is_perfect: boolean,
        fun_fact: string,
        numberProperties: string[],
        digitSum: number) {
        this.number = num;
        this.is_prime = is_prime;
        this.is_perfect = is_perfect;
        this.properties = numberProperties

        this.digit_sum = digitSum;
        this.fun_fact = fun_fact
    }

    static async create(num: NumberInput) {
        const number = num.getNum();
        const is_prime = num.isNumPrime();
        const is_perfect = num.isNumPerfect()
        const fun_fact = await num.getNumFunFact();
        const numProperties = num.getProperties();
        const digitSum = num.getDigitSum();
        return new ResponseDto(number, is_prime, is_perfect, fun_fact, numProperties, digitSum)
    }
}