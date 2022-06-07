import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MoneyRoutingModule } from './money-routing.module';

import { components } from '.';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    MoneyRoutingModule,
  ],
  declarations: [...components],
  exports: [...components],
})
export class MoneyModule {}
