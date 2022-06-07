import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeContainer } from './home/home.container';
import { NotFoundPageContainer } from './not-found-page/not-found-page.container';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeContainer,
  },
  {
    path: 'navbar',
    loadChildren: () =>
      import('../Navbar/navbar.module').then((m) => m.NavbarModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('../Auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'content',
    loadChildren: () =>
      import('../content/content.module').then((m) => m.ContentModule),
  },
  {
    path: 'hide-nav',
    loadChildren: () =>
      import('../navbar-hide/navbar-hide.module').then((m) => m.NavbarHideModule),
  },
  {
    path: 'money',
    loadChildren: () =>
      import('../Money/money.module').then((m) => m.MoneyModule),
  },
  {
    path: '**',
    component: NotFoundPageContainer,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
