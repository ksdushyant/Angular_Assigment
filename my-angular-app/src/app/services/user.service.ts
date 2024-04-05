import { Injectable } from '@angular/core';
import { User } from '../User_Structure';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [];
     
    addtoArray(arr: User[])
    {
      this.users = arr;
    }
}
