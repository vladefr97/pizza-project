import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../../providers/auth/auth.service';
import {DisplayService} from '../../../../providers/display/display.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private displayService: DisplayService) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      name: [, {
        validators: [Validators.required],
        updateOn: 'change',
      }],
      password: [, {
        validators: [Validators.required, Validators.minLength(5)],
        updateOn: 'change',
      }]
    });
  }

  signIn() {
    // if (this.loginForm.invalid) {
    //   return;
    // }
    this.authService.singIn(this.loginForm.value).subscribe(res => {
      this.displayService.displayAuthorizedUserFunctionality();
    });
  }

}
