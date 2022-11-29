import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { PatientPageComponent } from './patient-page/patient-page.component';
import { TreatmentPageComponent } from './treatment-page/treatment-page.component';

const routes: Routes = [
  {path:"login-page", component:LoginPageComponent},
  {path:"patient-page",component:PatientPageComponent},
  {path:"treatment-page",component:TreatmentPageComponent},
  { path: '', redirectTo: '/login-page', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
