import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PatientPageComponent } from './patient-page/patient-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientServiceService } from './patient-service.service';
import { TreatmentPageComponent } from './treatment-page/treatment-page.component';
import { NgModule } from '@angular/core';
import { ClaimsComponent } from './claims/claims.component';
import { SuccessComponent } from './success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    PatientPageComponent,
    TreatmentPageComponent,
    ClaimsComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PatientServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
