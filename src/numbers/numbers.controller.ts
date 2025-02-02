import { BadRequestException, Controller, Get, Query, UseFilters } from '@nestjs/common';
import { NumbersService } from './numbers.service';
import { BadRequestExceptionFilter } from './filters/badRequest.filter';


@Controller('classify-number')
export class NumbersController {

    constructor(private numbersService: NumbersService) {}

    @Get("")
    @UseFilters(BadRequestExceptionFilter)
    async getNumberClassification(
        @Query("number") number: number
    ) {
        number = +number
        if (Number.isNaN(number)) {
            throw new BadRequestException()
        }
        return this.numbersService.getNumberSpec(number);
    }
}
