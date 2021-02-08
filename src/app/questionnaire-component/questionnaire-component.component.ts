import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api-service.service';
import { FormGroup, FormControl, NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms'; 

import { NgModule  } from '@angular/core';

@Component({
  selector: 'app-questionnaire-component',
  templateUrl: './questionnaire-component.component.html',
  styleUrls: ['./questionnaire-component.component.scss']
})
export class QuestionnaireComponentComponent implements OnInit {

  formData = [];
  valid = false;
  error = false;
  response = {
    linkId: '',
   text: "",
   type: "",
   value:'',
   items:[]
  }
  responses =[]
  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
    this.getFormData();
    
  }

  async getFormData(){
    this.apiService.getFormData().then(data =>
     
       {
         var items = data.data.item
     console.log(items);
 
       for (const element of items) {
         this.response = {
           linkId: '',
          text: "",
          type: "",
          value:'',
          items:[]
         }
         console.log(element);
         
         if (!element.item) {
           this.response.linkId = element.linkId;
           this.response.text = element.text;
           this.response.type = element.type;
           this.formData.push(this.response);
         } else{
           this.response.linkId = element.linkId;
           this.response.text = element.text;
           this.response.type = element.type;
           var newitems = [];
           for (const el of element.item) {
            
              var item = {
               linkId:el.linkId,
               text:el.text,
               type:el.type,
               value:''
             }
             newitems.push(item);
             item = null;
           }
           this.response.items = newitems
           this.formData.push(this.response);
           
 
         }
         
       }
     console.log(this.formData);
     
       }
       )
     console.log(this.formData);
     
     
       }
 
       modelChangeFn(e){
         console.log(e);
         
       }
       submit(){
         console.log(this.formData);
         for (const item of this.formData) {
           if(!item.items){
             if (!item.value) {
               this.error = true;
               return
             }
 
 
           } else{
             for (const el of item.items) {
               if (!el.value) {
                 this.error = true;
                 return
               }
             }
 
           }
         }
         if (!this.error) {
           this.valid = true;
         }
       
         
       }

}
