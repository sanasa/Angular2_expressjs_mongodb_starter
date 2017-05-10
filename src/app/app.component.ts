import { Component } from '@angular/core';
import {UserComponent} from './users/user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users : UserComponent[]=[];
  
}
