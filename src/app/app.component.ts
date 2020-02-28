import { Component } from '@angular/core';
import { Helper } from './Helpers/Helper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  constructor() {  
      Helper.isNextStep = false;
      Helper.Message = null;
   }
}
