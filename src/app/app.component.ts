import { Component } from '@angular/core';
import {FormBuilder} from '@angular/forms';

import {Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

   groupedform = this.fb.group({
   Name : ['', Validators.required],
   Email: [],
   
  });
  constructor(private fb:FormBuilder)
  {

  }
  updateName(){
    
  }

}