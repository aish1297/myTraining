import { Component, OnInit } from '@angular/core';
import {FormControl,Validators, FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    firstName: string = "Moon";
    lastName: string = "Kid";
    placeName: string ='';
    loginForm: FormGroup;
  
    // usernameFormControl = new FormControl('', [
    //     Validators.required,
    //     Validators.maxLength(20),
    //     Validators.pattern('^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$')
    // ]);
    // passwordFormControl = new FormControl('', [
    //     Validators.required,
    //     Validators.maxLength(10)
    // ]);

    // loginForm = new FormGroup({
    //     username: new FormControl('', Validators.required),
    //     password: new FormControl('', Validators.required),
    // });

    userValidationMessages = {
        'username': [
            { type: 'required', errorMessage: 'Username/Email is required'},
            { type: 'maxlength', errorMessage: 'Username must be 20 characters'},
            { type: 'pattern', errorMessage: 'Enter the correct email format'}
        ],
        'password': [
            { type: 'required', errorMessage: 'Password is required'},
            { type: 'maxlength', errorMessage: 'Password must be 10 characters'},
        ]
    }

    constructor(private router: Router, private fb: FormBuilder) {
        this.loginForm = fb.group({
            'username': new FormControl('', Validators.compose([
                Validators.required,
                Validators.maxLength(20),
                Validators.pattern('[^@]+@[^\.]+\..+')
            ])),            
            'password': new FormControl('', Validators.compose([
                Validators.required,
                Validators.maxLength(10)
            ]))
        });
    }

    ngOnInit() {
    }

    showAlert() {
        alert('Hey Bucketyyyyyyyyy!!!');
    }

    loginUser() {
        this.router.navigate(['home']);
    }

}
