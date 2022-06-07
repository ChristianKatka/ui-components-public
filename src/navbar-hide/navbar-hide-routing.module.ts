import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarHideFeatureContainerComponent } from './navbar-hide-feature.container';
import { NavbarHideComponent } from './navbar-hide/navbar-hide.component';

export const childRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: NavbarHideComponent,
  },
  // {
  //   path: 'sign-in',
  //   component: SignInContainerComponent,
  // },
];

export const navbarHideRoutes: Routes = [
  {
    path: '',
    component: NavbarHideFeatureContainerComponent,
    children: childRoutes,
  },
];

@NgModule({
  imports: [RouterModule.forChild(navbarHideRoutes)],
  exports: [RouterModule],
})
export class NavbarHideRoutingModule {}
