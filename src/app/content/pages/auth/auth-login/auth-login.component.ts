import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { Notice } from 'src/app/core/models/notice';
import { Login } from 'src/app/core/models/login';

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
    this.doLogin(_login);
  }

  doLogin(login: Login){
      this.authService.postLogin(login)
           .subscribe((data)=>{
             localStorage.setItem("accessToken", data.access_token);
             window.alert("Usuario logado");
           },(error)=>{
             window.alert(error.error.error_description)
           })
  }

}
