import { Component, EventEmitter, Output } from '@angular/core';

//===================================
//=========== Directives ============
// Two Way binging using  FormModule Directives
//===================================
/*
Example for 2 way binding
  <p>
    <label for="title">Title</label>
    <input type="text" id="title" name="title" [(ngModel)] ="inputTitle" />
  </p>
  <p>
    <label for="title">Title</label>
    <input type="text" id="title" name="title" [(ngModel)] ="inputTitle" />
  </p>
*/

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() hideTaskUI =new EventEmitter<void>();
  
  inputTitle = '';
  inputSummery = '';
  inputDate = '';

  hideTask(){
    this.hideTaskUI.emit();
  }
}
