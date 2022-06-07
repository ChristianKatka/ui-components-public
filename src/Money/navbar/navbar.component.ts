import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BottomSheetService } from '../services/bottom-sheet.service';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.scss'],
})
export class  NavbarComponent implements OnInit {

  active = false;

  constructor(private bottomSheetService: BottomSheetService, public router: Router) {}

  ngOnInit() {}

  openBottomsheet() {
    this.bottomSheetService.openBottomsheet();
  }

  changeActivation() {
    this.active = !this.active;
  }
}
