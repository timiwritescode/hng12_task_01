import { BadRequestException, Controller, Get, Query, UseFilters } from '@nestjs/common';
import { NumbersService } from './numbers.service';
import { BadRequestExceptionFilter } from './filters/badRequest.filter';


@Controller('classify-number')
export class NumbersController {

    constructor(private numbersService: NumbersService) {}

    @Get("")
    @UseFilters(BadRequestExceptionFilter)
    async getNumberClassification(
        @Query("number") queryInput: string
    ) {
        
        if (Number.isInteger(parseInt(queryInput)) == false) {
            throw new BadRequestException()
        }
        
        return this.numbersService.getNumberSpec(+queryInput);
    }
}
