import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    firstName: string = "Moon";
    lastName: string = "Kid";
    placeName: string ='';
  
    usernameFormControl = new FormControl('', [
        Validators.required,
    ]);
    constructor() {
    }

    ngOnInit() {
    }

    showAlert() {
        alert('Hey Bucketyyyyyyyyy!!!');
    }

}
