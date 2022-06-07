import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentFeatureContainerComponent } from './content-feature.container';
import { ContentContainerComponent } from './content/content.container';

export const childRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ContentContainerComponent,
  },
  // {
  //   path: 'sign-in',
  //   component: SignInContainerComponent,
  // },
];

export const contentRoutes: Routes = [
  {
    path: '',
    component: ContentFeatureContainerComponent,
    children: childRoutes,
  },
];

@NgModule({
  imports: [RouterModule.forChild(contentRoutes)],
  exports: [RouterModule],
})
export class ContenthRoutingModule {}
