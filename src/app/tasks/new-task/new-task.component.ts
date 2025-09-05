import { Component, EventEmitter, Output,signal } from '@angular/core';
import { NewTask } from '../task.model';

//===================================
//=========== Directives ============
// Two Way binging using  FormModule Directives
//===================================
/*
  ************************ Example for 2 way binding ************************
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
  @Output() add =new EventEmitter<NewTask>();
  
  //==== Without Signals ========
  inputTitle = '';
  inputSummery = '';
  inputDate = '';

  //==== With Signals ========
  // inputTitle = signal('');
  // inputSummery = signal('');
  // inputDate = signal('');

  hideTask(){
    this.hideTaskUI.emit();
  }

  onSubmit(){
    this.add.emit({
      title:this.inputTitle,
      summery:this.inputSummery,
      date:this.inputDate
    });
  }
}
