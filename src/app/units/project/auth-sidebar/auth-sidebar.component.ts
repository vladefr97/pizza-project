import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
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

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private displayService: DisplayService) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.registerForm = this.formBuilder.group({
      login: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
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

}
