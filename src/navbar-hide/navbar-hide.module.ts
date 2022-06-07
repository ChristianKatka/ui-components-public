import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavbarHideRoutingModule } from './navbar-hide-routing.module';
import { components } from '.';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    NavbarHideRoutingModule,
  ],
  declarations: [...components],
  exports: [...components],
})
export class NavbarHideModule {}
