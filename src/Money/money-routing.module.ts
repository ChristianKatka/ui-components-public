import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoadingPageComponent } from './components/loading-page/loading-page.component';
import { MoneyHomeComponent } from './components/money-home/money-home.component';
import { MoneyMessageContainerComponent } from './components/money-messages/money-messages.container';
import { MoneyProfileContainerComponent } from './components/money-profile/money-profile.container';
import { MoneySearchComponent } from './components/money-search/money-search.component';
import { MoneyFeatureContainerComponent } from './money-feature.container';

export const childRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: MoneyHomeComponent,
  },
  {
    path: 'search',
    component: MoneySearchComponent,
  },
  {
    path: 'messages',
    component: MoneyMessageContainerComponent,
  },
  {
    path: 'profile',
    component: MoneyProfileContainerComponent,
  },
  {
    path: 'loading',
    component: LoadingPageComponent
  }
];

export const moneyRoutes: Routes = [
  {
    path: '',
    component: MoneyFeatureContainerComponent,
    children: childRoutes,
  },
];

@NgModule({
  imports: [RouterModule.forChild(moneyRoutes)],
  exports: [RouterModule],
})
export class MoneyRoutingModule {}
