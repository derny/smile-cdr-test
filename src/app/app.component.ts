import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../app/services/api-service.service';
import { FormGroup, FormControl, NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms'; 

import { NgModule  } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'fhir-app-test';

  constructor(
    private apiService: ApiService,
  ) {
    
   }

  ngOnInit() {
    this.apiService.getPatients().subscribe(
      data => {
        console.log(data);
      }
    )
    
  }


}


