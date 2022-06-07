import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-money-profile',
  templateUrl: 'money-profile.component.html',
  styleUrls: ['money-profile.component.scss'],
})
export class MoneyProfileComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  active = true;
  editProfile$ = new BehaviorSubject(false);

  onStartEditingProfile() {
    this.editProfile$.next(true);
  }
}
