import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarFeatureContainerComponent } from './navbar-feature.container';
import { Navbar1ContainerComponent } from './navbar1/navbar1.container';

export const childRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: Navbar1ContainerComponent,
  },
];

export const navbarRoutes: Routes = [
  {
    path: '',
    component: NavbarFeatureContainerComponent,
    children: childRoutes,
  },
];

@NgModule({
  imports: [RouterModule.forChild(navbarRoutes)],
  exports: [RouterModule],
})
export class NavbarRoutingModule {}
