import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/core/services/usuarios.service';

@Component({
  selector: 'app-auth-registro',
  templateUrl: './auth-registro.component.html',
  styleUrls: ['./auth-registro.component.scss']
})
export class AuthRegistroComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private usuariosService: UsuariosService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.form = this.fb.group({
      'nome': ['', Validators.required],
      'usuario': ['', Validators.required],
      'senha':['', Validators.required],
      'telefone': [''],
      'email': ['']
    })
  }

  onSubmit(){
     console.log('salvo!!!')
  }


}
