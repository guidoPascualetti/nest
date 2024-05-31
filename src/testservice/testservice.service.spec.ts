import { Test, TestingModule } from '@nestjs/testing';
import { HttpModule, HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable, of } from 'rxjs';
import { TestserviceService } from './testservice.service';
import {User} from './testservice.service';
describe('TestserviceService', () => {
  let service: TestserviceService;
  let httpService: HttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [TestserviceService],
    }).compile();

    service = module.get<TestserviceService>(TestserviceService);
    httpService = module.get<HttpService>(HttpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should call HTTP service and return status 200', async () => {
 

    const result: Observable<AxiosResponse<User[]>> = service.findAll();
    result.subscribe(response => {
      expect(response.status).toBe(200); // Verifica el código de estado de la respuesta
    });
  });
  it('should call HTTP service and return an Array', async () => {
    const result: Observable<AxiosResponse<User[]>> = service.findAll();
    result.subscribe(response => {
     expect(Array.isArray(response.data)).toBe(true); // Verifica si la respuesta es un array
    });
  });
});
