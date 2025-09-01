import { Component } from '@angular/core';
import {DUMMY_USERS} from '../dummy-users';



const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)



@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  selectedUser = DUMMY_USERS[randomIndex];//[0];

  get ImagePath(){
    return "assets/users/" + this.selectedUser.avatar;
  };

  //======= Event Binding =========
  ChangeUser(){
    //========== 1. rendom console change =======
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
    // console.log("ok",randomIndex)

    //========== 2. State change ========
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
    this.selectedUser = DUMMY_USERS[randomIndex]
  }

   // NOTE
    //================== zone.js ===================
    /*
      1. What is zone.jss? 
      zone.js is a library that Angular uses to detect and track asynchronous operations like:

      setTimeout
      Promise
      addEventListener
      XHR / fetch calls

      NOTE
      Angular uses zone.js to automatically trigger change detection and update the UI.

      Example:
      When click is called the   zone.js tell to  anguler this is click event and do some changing 

      NOTE
      1. Does zone.js Update the UI Itself? ❌
          No!
          zone.js never updates the UI directly.
          Its only job is to notify Angular whenever an asynchronous task or event happens.

          After that, Angular itself runs change detection and updates the UI.
      */
     
      name = "SAQIB"
      changeName() {
        const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
        this.name = 'Ahamd Ali : ' + randomIndex;
      }
}
