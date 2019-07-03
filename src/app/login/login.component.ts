import { Component, OnInit } from '@angular/core';
import {FormControl,Validators} from '@angular/forms';

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
        Validators.maxLength(20),
        Validators.pattern('^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$')
    ]);
    passwordFormControl = new FormControl('', [
        Validators.required,
        Validators.maxLength(10)
    ]);
    constructor() {
    }

    ngOnInit() {
    }

    showAlert() {
        alert('Hey Bucketyyyyyyyyy!!!');
    }

}
