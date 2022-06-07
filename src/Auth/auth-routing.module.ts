import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthFeatureContainerComponent } from './auth-feature.container';
import { SignInNewPasswordRequiredContainerComponent } from './sign-in-new-password-required/sign-in-new-password-required.container';
import { SignInContainerComponent } from './sign-in/sign-in.container';
import { SignUpVerificationContainerComponent } from './sign-up-verification/sign-up-verification.container';
import { SignUpContainerComponent } from './sign-up/sign-up.container';
import { WelcomeContainerComponent } from './welcome/welcome.container';

export const childRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'sign-in',
  },
  {
    path: 'sign-in',
    component: SignInContainerComponent,
  },
  {
    path: 'sign-up',
    component: SignUpContainerComponent,
  },
  {
    path: 'sign-up-verification',
    component: SignUpVerificationContainerComponent,
  },
  {
    path: 'welcome',
    component: WelcomeContainerComponent,
  },
  {
    path: 'sign-up-new',
    component: SignInNewPasswordRequiredContainerComponent
  }
];

export const authRoutes: Routes = [
  {
    path: '',
    component: AuthFeatureContainerComponent,
    children: childRoutes,
  },
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
