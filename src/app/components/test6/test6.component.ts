import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-test6',
  templateUrl: './test6.component.html',
  styleUrl: './test6.component.scss'
})
export class Test6Component {

  constructor(private _bottomSheetRef: MatBottomSheetRef<Test6Component>) {
    
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
  
}
