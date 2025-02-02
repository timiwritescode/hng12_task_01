import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { NumberInput } from './number';
import { ResponseDto } from './dto/response.dto';

@Injectable()
export class NumbersService {

    async getNumberSpec(numberInput: number): Promise<ResponseDto> {
        try {
            const number = new NumberInput(numberInput);
            
            return new ResponseDto(number)
        } catch (error) {
            throw new InternalServerErrorException("An error occured")
        }
    }

}
