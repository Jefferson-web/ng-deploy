import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Test6Component } from '../test6/test6.component';

@Component({
  selector: 'app-test5',
  templateUrl: './test5.component.html',
  styleUrl: './test5.component.scss'
})
export class Test5Component {

  /**
   *
   */
  constructor(private _bottomSheet: MatBottomSheet) {
    
  }

  crear(){
    alert("Registrado");
  }

  data: any;

  openBottomSheet(): void {
    this._bottomSheet.open(Test6Component);
  }
}
