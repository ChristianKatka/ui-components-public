import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-profile-info',
  templateUrl: 'profile-info.component.html',
  styleUrls: ['profile-info.component.scss'],
})
export class ProfileInfoComponent {
  @Output()
  startEditingProfile = new EventEmitter();
}
