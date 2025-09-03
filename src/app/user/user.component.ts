import { Component, computed } from '@angular/core';
import {DUMMY_USERS} from '../dummy-users';
import { signal } from '@angular/core';
import { Input } from '@angular/core';



const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)



@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  // =================
  // NOTE
  // Setting  Validation on Input  that the In Parmteer is
  // 1. Requireds
  // 2. optional 
  // =================
  // param 1
  @Input({required:true}) avator! : string;
  // param 2
  @Input({required:true}) name! : string;

   selectedUser = DUMMY_USERS[randomIndex];//[0];

    //exclamation mark

    get ImagePath(){
      return "assets/users/" + this.avator;
    };

    ChangeUser(){}
   
}
