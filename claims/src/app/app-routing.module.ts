import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimsComponent } from './claims/claims.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PatientPageComponent } from './patient-page/patient-page.component';
import { SuccessComponent } from './success/success.component';
import { TreatmentPageComponent } from './treatment-page/treatment-page.component';

const routes: Routes = [
  {path:"login-page", component:LoginPageComponent},
  {path:"patient-page",component:PatientPageComponent},
  {path:"treatment-page",component:TreatmentPageComponent},
  {path:"claims",component:ClaimsComponent},
  {path:"success",component:SuccessComponent},
  { path: '', redirectTo: '/login-page', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
