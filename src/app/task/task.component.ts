import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  //================== Type script ===================
  company:String = "";
  select:String = "";
  
  
  //================== Nullesh ===================
  // @Input({required:true}) NameOfUser! :String; 
  // @Input() NameOfUser? :String; 
  // @Input() NameOfUser : String | undefined; 
  @Input() NameOfUser? : String; 
}
