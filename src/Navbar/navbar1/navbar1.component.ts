import { Component, OnInit } from '@angular/core';
import { BottomSheetService } from '../services/bottom-sheet.service';

@Component({
  selector: 'app-navbar1',
  templateUrl: 'navbar1.component.html',
  styleUrls: ['navbar1.component.scss'],
})
export class  Navbar1Component implements OnInit {
  constructor(private bottomSheetService: BottomSheetService) {}

  ngOnInit() {}

  openBottomsheet() {
    this.bottomSheetService.openBottomsheet();
  }
}
