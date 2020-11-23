import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { MatDivider } from '@angular/material/divider';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]> | undefined;

  ngOnInit() {
    console.log(this.filteredOptions);

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
      console.log(this.filteredOptions);

  }

  private _filter(value: string): string[] 
  {
    const filterValue = value.toUpperCase();
    
    return this.options.filter(option => option.toUpperCase().includes(filterValue));
  }
}

