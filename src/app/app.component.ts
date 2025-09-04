import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TaskComponent } from "./task/task.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Analyzing-The-Project-Structure';
  users = DUMMY_USERS;

  userName:String = "This is selected UserName"


  onSelectUser(Id:String){
    console.log("Selected user with Id : ",Id);
  }

  onSelectUserGetName(name:String){
    this.userName = name;
  }

}
