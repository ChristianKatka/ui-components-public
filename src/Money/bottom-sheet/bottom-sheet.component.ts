import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  templateUrl: 'bottom-sheet.component.html',
  styleUrls: ['bottom-sheet.component.scss'],
})
export class BottomSheetComponent implements OnInit {
  constructor(
    private bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>
  ) {}

  ngOnInit() {}

  close() {
    this.bottomSheetRef.dismiss();
  }
}
