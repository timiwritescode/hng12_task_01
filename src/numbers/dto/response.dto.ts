export class ResponseDto {
    number: number;
    is_prime: boolean;
    is_perfect: boolean;
    properties: string[];
    digit_sum: number;
    fun_fact: string;

    constructor(
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
}