import { Controller, Get } from '@nestjs/common';
import {TestserviceService} from '../testservice/testservice.service'

@Controller('api')
export class ApiController {
constructor(private readonly testService: TestserviceService)  {}

    @Get()
    async getHello() {

        const data = await this.testService.findAll()

        return data
  
    }
}

