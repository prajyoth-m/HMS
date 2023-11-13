import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;
  constructor(private httpClient: HttpClient) { }

  doLogin(auth: string) {
    return this.httpClient.get<User>('http://localhost:8080/user/login', { headers: { Authorization: "Basic " + auth } });
  }
}
