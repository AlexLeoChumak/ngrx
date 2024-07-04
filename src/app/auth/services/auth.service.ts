import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterRequestInterface } from 'src/app/auth/types/registerRequest.interface';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: RegisterRequestInterface): CurrentUserInterface {
    return {
      id: 1,
      email: 'dfg@fgfdgd.rt',
      createdAt: 'string',
      updatedAt: 'ghhfhh',
      username: 'Jon',
      bio: null,
      image: null,
      token: 'jghgjhfgjgfj',
    };
  }
}
