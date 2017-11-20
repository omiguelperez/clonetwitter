  import { Injectable } from '@angular/core';

  import { User } from '../commons/user';
  import { USERS } from './mocks/users';

  @Injectable()
  export class UserService {

    getUsers(): Promise<User[]> {
      return Promise.resolve(USERS);
    }

    loginUser(email: string, password: string): Promise<User> {
      let user: User;
      user = this.find(email, password);
      return Promise.resolve(user);
    }

    find(email: string, password: string): User {
      let user: User;
      console.log('usuarios', USERS);
      user = USERS.find(u => u.email === email);
      if (user !== undefined && user.password === password) return user;
      else return undefined;
    }
    
  }