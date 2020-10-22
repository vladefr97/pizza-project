import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../providers/auth/auth.service';
import {Router} from '@angular/router';
import {DisplayService} from '../../../providers/display/display.service';

@Component({
  selector: 'app-auth-sidebar',
  templateUrl: './auth-sidebar.component.html',
  styleUrls: ['./auth-sidebar.component.scss']
})
export class AuthSidebarComponent implements OnInit {
  loginForm: FormGroup;
  registerForm: FormGroup;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  loginFormControl = new FormControl('', [Validators.required]);
  phoneFormControl = new FormControl('', Validators.pattern(/(\(?[0-9]{3}\)?-?\s?[0-9]{3}-?[0-9]{4})/));
  passwordFromControl = new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]);

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private displayService: DisplayService) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.registerForm = this.formBuilder.group({
      login: ['', this.loginFormControl],
      // email: ['', this.emailFormControl, {updateOn: 'change'}],
      email: ['', this.emailFormControl, {updateOn: 'change'}],
      phone: ['', this.phoneFormControl],
      password: ['', this.passwordFromControl]
    });
  }

  get formControls() {
    return this.loginForm.controls;
  }

  signUp() {
    console.log(this.registerForm.value);
    this.authService.register(this.registerForm.value).subscribe((res) => {
      console.log(res);
      this.displayService.displayAuthorizedUserFunctionality();
    });
  }

  signIn() {
    if (this.loginForm.invalid) {
      return;
    }
    this.authService.singIn(this.loginForm.value).subscribe(res => {
      this.displayService.displayAuthorizedUserFunctionality();
    });
  }

  getEmailErrorMessage() {
    return this.emailFormControl.hasError('required') ? 'You must enter a value' :
      this.emailFormControl.hasError('email') ? 'Not a valid email' : '';
  }

  getPhoneErrorMessage() {
    return this.phoneFormControl.hasError('required') ? 'You must enter a value' :
      this.phoneFormControl.hasError('pattern') ? 'Format must be (xxx) xxx-xxxx' : '';
  }

  // getRequiredErrorMessage(field) {
  //   return this.biodataForm.get(field).hasError('required') ? 'You must enter a value' : '';
  // }

}
