import { Component } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { FormArray } from '@angular/forms';
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

   knownlang: this.fb.array([
    this.fb.control('')
  ])
  });
  constructor(private fb:FormBuilder)
  {

  }
  get knownlanguagesfun()
  {
    return this.groupedform.get('knownlang') as FormArray;
  }
  setlangfun()
  {
    this.knownlanguagesfun.push(this.fb.control(''));
  }
  updateName(){
    
  }

}