import { Component,Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  //================== Type script ===================
  company:string = "";
  select:string = "";
  
  
  //================== Nullesh ===================
  // @Input({required:true}) NameOfUser! :String; 
  // @Input() NameOfUser? :String; 
  // @Input() NameOfUser : String | undefined; 
  @Input() NameOfUser? : string; 
}
