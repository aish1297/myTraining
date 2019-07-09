import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let debug: DebugElement;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent 
    ],
    imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule
    ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(LoginComponent);
      component = fixture.componentInstance;// LoginComponent test instance
      debug = fixture.debugElement.query(By.css('form'));
      element = debug.nativeElement;
    });
  }));

  // it(`should have as username 'login page'`, async(() => {
  //   expect(component.).toEqual('login page');
  // }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should call the loginUser method`, async(() => {
    fixture.detectChanges();
    spyOn(component, 'loginUser');
    element = fixture.debugElement.query(By.css('button')).nativeElement;
    element.click();
    expect(component.loginUser).toHaveBeenCalledTimes(0);
  }));

  it(`form should be invalid`, async(() => {
    component.loginForm.controls['username'].setValue('');
    component.loginForm.controls['password'].setValue('');
    expect(component.loginForm.valid).toBeFalsy(); 
  }));

  it(`form should be valid`, async(() => {
    component.loginForm.controls['username'].setValue('kid@moon.com');
    component.loginForm.controls['password'].setValue('cdhgscg1');
    expect(component.loginForm.valid).toBeTruthy();
  }));

  it(`username field validity`, async(() => {
    let username = component.loginForm.controls['username'];
    expect(username.valid).toBeFalsy();
  }));

  it(`password field validity`, async(() => {
    let password = component.loginForm.controls['password'];
    expect(password.valid).toBeFalsy();
  }));
  

});