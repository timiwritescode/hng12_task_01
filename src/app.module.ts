import { Module } from '@nestjs/common';
import { NumbersModule } from './numbers/numbers.module';
import { CheckModule } from './check/check.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';


@Module({
  imports: [NumbersModule, CheckModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
