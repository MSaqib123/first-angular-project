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
  selectedUserId:String = "u1";
  
  onSelectUser(Id:String){
    this.selectedUserId = Id;
  }
  get onSelectUserObj(){
    return this.users.find(x=>x.id==this.selectedUserId)!;
  }


}
