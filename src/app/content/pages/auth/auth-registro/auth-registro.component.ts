import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Usuarios } from 'src/app/core/molders/usuarios';
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
      'nome': ["",Validators.required],
      'telefone':  [""],
      'email':  [""],
      'usuario': ["",Validators.required],
      'senha':  ["",Validators.required],
    })
  }

  onSubmit(){
    const _usuarioAdd = this.prepareUsuario();
    this.postUsuario(_usuarioAdd);
  }

  postUsuario(usuarioAdd: Usuarios){
    this.usuariosService.postUsuario(usuarioAdd)
           .subscribe((msg)=>{
            console.log(msg);
           });
  }

  prepareUsuario(): Usuarios{
    const _controls = this.form.controls;
    const _usuarioAdd = new Usuarios();
    _usuarioAdd.nome = _controls['nome'].value;
    _usuarioAdd.telefone = _controls['telefone'].value;
    _usuarioAdd.email = _controls['email'].value;
    _usuarioAdd.usuario = _controls['usuario'].value;
    _usuarioAdd.senha = _controls['senha'].value;
    return _usuarioAdd;
  }
}
