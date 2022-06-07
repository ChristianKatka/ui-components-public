import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavbarRoutingModule } from './navbar-routing.module';

import { components } from '.';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    NavbarRoutingModule,
  ],
  declarations: [...components],
  exports: [...components],
})
export class NavbarModule {}
