import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { NumberInput } from './number';
import { ResponseDto } from './dto/response.dto';

@Injectable()
export class NumbersService {
    private logger = new Logger(NumbersService.name)
    async getNumberSpec(numberInput: number): Promise<ResponseDto> {
        try {
            const number = new NumberInput(numberInput);
            
            return new ResponseDto(
                number.getNum(),
                number.isNumPrime(),
                number.isNumPerfect(),
                await number.getNumFunFact(),
                number.getProperties(),
                number.getDigitSum()
            )
        } catch (error) {
            this.logger.error(error.message)
            throw new InternalServerErrorException("An error occured")
        }
    }

}
