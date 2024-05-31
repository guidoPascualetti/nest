import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TestserviceService } from './testservice.service';
@Module({
  imports: [HttpModule],
  providers: [TestserviceService],
  exports: [TestserviceService],
})
export class TestserviceModule {}
