import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Login } from 'src/app/core/molders/login';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss']
})
export class AuthLoginComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService) { }

  ngOnInit() {
    //Criando o formulário;
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
    this.login(_login)
  }

  login(login: Login){
    this.authService.postLogin(login)
          .subscribe((data)=>{
            
          })
          
  }

}
