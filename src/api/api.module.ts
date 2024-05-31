import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { TestserviceModule } from "../testservice/testservice.module"
@Module({
  imports:[TestserviceModule],
  controllers: [ApiController]
})
export class ApiModule {}
