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
  /* passing Values  from Parent (app) to chil(user) compoennts  ||  like passing parameter to function kinds*/
  // =================
  // param 1
  @Input() avator! : string;
  // param 1
  @Input() name! : string;

   selectedUser = DUMMY_USERS[randomIndex];//[0];

    get ImagePath(){
      return "assets/users/" + this.avator;
    };
    
    ChangeUser(){}
   
}
