import { Component } from '@angular/core';
import { FormGroup, FormBuilder,Validators  } from '@angular/forms';

@Component({
  selector: 'form-validation',
  template : `
  <div class="jumbotron">
    <h2>Form w/ Validations</h2>
    <form [formGroup]="complexForm" (ngSubmit)="submitForm(complexForm.value)">
      <div class="form-group" [ngClass]="{'has-error':!complexForm.controls['firstName'].valid}">
        <label>First Name:</label>
        <input class="form-control" type="text" placeholder="John" [formControl]="complexForm.controls['firstName']">
      </div>
      <!-- We are using the ngClass directive to conditionally add a class to our div if the form is invalid -->
      <div class="form-group" [ngClass]="{'has-error':!complexForm.controls['lastName'].valid}">
        <label>Last Name</label>
        <input class="form-control" type="text" placeholder="Doe" [formControl]="complexForm.controls['lastName']">
      </div>
      <div class="form-group" [ngClass]="{'has-error':!complexForm.controls['gender'].valid}">
        <label>Gender</label>
        <!-- Here we are using the ngIf directive to display an error message if the user has not selected a gender since we can’t color the radio buttons. -->
        <div class="alert alert-danger" *ngIf="!complexForm.controls['gender'].valid">You must select a gender.</div>
      </div>
      <div class="radio">
        <label>
          <input type="radio" name="gender" value="Male" [formControl]="complexForm.controls['gender']">
          Male
        </label>
      </div>
      <div class="radio">
        <label>
          <input type="radio" name="gender" value="Female" [formControl]="complexForm.controls['gender']">
          Female
        </label>
      </div>
      <div class="form-group">
        <label>Activities</label>
      </div>
      <label class="checkbox-inline">
        <input type="checkbox" value="hiking" name="hiking" [formControl]="complexForm.controls['hiking']"> Hiking
      </label>
      <label class="checkbox-inline">
        <input type="checkbox" value="swimming" name="swimming" [formControl]="complexForm.controls['swimming']"> Swimming
      </label>
      <label class="checkbox-inline">
        <input type="checkbox" value="running" name="running" [formControl]="complexForm.controls['running']"> Running
      </label>
      <div class="form-group">
        <button type="submit" class="btn btn-primary" [disabled]="!complexForm.valid">Submit</button>

      </div>
    </form>
  </div>
  `
})
export class FormValidationComponent {
  complexForm : FormGroup;

 constructor(fb: FormBuilder){
    this.complexForm = fb.group({
      // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
      'firstName' : [null, Validators.required],
      // We can use more than one validator per field. If we want to use more than one validator we have to wrap our array of validators with a Validators.compose function. Here we are using a required, minimum length and maximum length validator.
      'lastName': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      'gender' : [null, Validators.required],
      'hiking' : false,
      'running' :false,
      'swimming' :false
    })
  }

  submitForm(value: any){
    console.log(value);
  }
}