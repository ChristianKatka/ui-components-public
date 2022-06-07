import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthRoutingModule } from './auth-routing.module';
import { components } from '.';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [...components],
  exports: [...components],
})
export class AuthModule {}
