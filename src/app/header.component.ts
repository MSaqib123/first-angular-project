import {Component} from '@angular/core'

// decorator
@Component({
  selector: 'app-header', 
  //======= inline element =========
//templateUrl: '<h1>Hello Words </h2>',
  templateUrl: './header.component.html',
//   styleUrl: './header.component.css'
})
export class HeaderComponent{}

