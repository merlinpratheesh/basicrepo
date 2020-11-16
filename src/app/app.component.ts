import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetComponent} from './bottom-sheet/bottom-sheet.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  constructor(private bottomSheet: MatBottomSheet) {
  }
  showBottomSheet() {
    this.bottomSheet.open(BottomSheetComponent);
  }
}
