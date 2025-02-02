import { Controller, Get, Query } from '@nestjs/common';
import { NumbersService } from './numbers.service';

@Controller('classify-number')
export class NumbersController {

    constructor(private numbersService: NumbersService) {}

    @Get("")
    async getNumberClassification(
        @Query("number") number: number
    ) {}
}
