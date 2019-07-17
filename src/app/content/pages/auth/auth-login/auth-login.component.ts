import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Login } from 'src/app/core/molders/login';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { Notice } from 'src/app/core/molders/notice';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss']
})
export class AuthLoginComponent implements OnInit {
  form: FormGroup;
  notice: Notice = new Notice();

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.form = this.fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  clearNotice(){
    if(this.notice){
      this.notice.class = null;
      this.notice.msg = null;
    }
  }

  prepareLogin(): Login{
    const _controls = this.form.controls;
    const _login = new Login();
    _login.grant_type = "password";
    _login.username = _controls['username'].value;
    _login.password = _controls['password'].value;
    return _login;
  }

  onSubmit(){
    const _login = this.prepareLogin();
    this.login(_login);
  }

  login(login: Login){
    this.authService.postLogin(login)
          .subscribe((data)=>{
            this.notice.class = "success";
            this.notice.msg = "usuário logado!";
          },(error)=>{
            this.notice.class = "danger";
            this.notice.msg = error.error.error_description;
          });
  }

}
