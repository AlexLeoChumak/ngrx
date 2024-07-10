import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterRequestInterface } from 'src/app/auth/types/registerRequest.interface';
import { Observable } from 'rxjs';
import { LoginRequestInterface } from 'src/app/auth/types/loginRequest.interface';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: RegisterRequestInterface): Observable<any> {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users/1');
  }

  login(data: LoginRequestInterface): Observable<any> {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users/1');
  }
}
