import { Component,AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];

  record = { lock: true };
  reactiveForm = new FormGroup({
    formctrl: new FormControl(false)
  });

  constructor(private fb: FormBuilder) {
    const variable = this.reactiveForm.get('formctrl'); // create a variable 
    variable!.valueChanges.subscribe(value => console.log(value));
  }
  ngAfterViewInit(): void {


  }
}
