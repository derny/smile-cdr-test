import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import axios from "axios";



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getPatients() {
    return this.httpClient.get(environment.queryURI + '/Patient',
      { headers: this.getHeaders() });
  }


  async getFormData(){
    return axios.get('assets/questionnaire.json');
    
      }
  private getHeaders(): HttpHeaders {
    const headers = new HttpHeaders({
      'Content-Type': 'application/fhir+json'
    });
    return headers;
  }
}


