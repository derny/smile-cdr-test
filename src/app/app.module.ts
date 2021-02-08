import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { ApiService } from './services/api-service.service';
import { QuestionnaireComponentComponent } from './questionnaire-component/questionnaire-component.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionnaireComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }