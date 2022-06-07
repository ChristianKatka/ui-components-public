import { Injectable } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component';

@Injectable({
  providedIn: 'root',
})
export class BottomSheetService {
  constructor(private bottomSheet: MatBottomSheet) {}

  openBottomsheet() {
    this.bottomSheet.open(BottomSheetComponent);
  }
}
