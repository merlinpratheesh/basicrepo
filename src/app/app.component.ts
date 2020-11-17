import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';

import {DialogActionsExampleComponent} from './dialog-actions-example/dialog-actions-example.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  constructor(private _matDialog: MatDialog) {}
  onClick() {
    this._matDialog.open(DialogActionsExampleComponent);
  }
}
