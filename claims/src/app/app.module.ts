import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PatientPageComponent } from './patient-page/patient-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PatientServiceService } from './patient-service.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    PatientPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PatientServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
