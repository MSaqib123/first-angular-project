import { Component, computed, EventEmitter } from '@angular/core';
import {DUMMY_USERS} from '../dummy-users';
import { signal } from '@angular/core';
//====== Decorator Base paramters =======
import { Input } from '@angular/core';
import { Output } from '@angular/core';

//====== Signle Base paramters =======
import { input } from '@angular/core';


@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  // ===================================
  // NOTE 1 Decorator Base Approche to take paramters
  // ===================================

  // Exclamation mark
  @Input({required:true}) avatar! : string;
  @Input({required:true}) name! : string;
  @Input({required:true}) Id! : string;
  @Output() select = new EventEmitter();

  get ImagePath(){
    return "assets/users/" + this.avatar;
  };

    ChangeUser(){
      this.select.emit(this.Id);
    }


  // ===================================
  // NOTE 2 signla Base parameters
  // ===================================
  //1. optinal
  //avatar = input<string>();
  //name = input<string>();

  //2. Required 
  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(()=>{
  //   console.log("assets/users/" + this.avatar())
  //   return "assets/users/" + this.avatar();
  // })

  // ChangeUser(){}
}
