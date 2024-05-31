import { Injectable } from '@nestjs/common';
import {HttpService } from "@nestjs/axios"
import { Observable } from 'rxjs';
import{ AxiosResponse, AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';

// export interface User {
//     userId:number,
//     id:number,
//     title:string,
//     completed: boolean
// }

export interface UserAdapter {
  id:number,
  titulo:string,
  completo: boolean
}


const userAdapter = (data: any[]): UserAdapter[] => {
  return data.map(item => ({
    id: item.userId,
    titulo: item.title,
    completo: item.completed
  }));
}


@Injectable()
export class TestserviceService {
    constructor(private readonly httpService: HttpService) {}
    

    async findAll(): Promise<UserAdapter[]> {
      const call =  this.httpService.get<any[]>('https://jsonplaceholder.typicode.com/todos')
      call.pipe(
        catchError((error: AxiosError) => {
          throw 'Algo salio mal llamando al usuario de jsonplaceholder'
        }),
      )
      const { data } = await firstValueFrom(call);
      return userAdapter(data);
    }

}
