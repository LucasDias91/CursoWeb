import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthRegistroComponent } from './auth-registro/auth-registro.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { UsuariosService } from 'src/app/core/services/usuarios.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from 'src/app/core/services/auth.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [AuthComponent, AuthLoginComponent, AuthRegistroComponent],
  imports: [
		FormsModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
    RouterModule.forChild([
			{
				path: '',
				component: AuthComponent,
				children: [
					{
						path: 'login',
						component: AuthLoginComponent
					},
					{
						path: 'registro',
						component: AuthRegistroComponent
					},
				]
			}
		])
	],
	providers: [AuthService, UsuariosService]
})
export class AuthModule { }
