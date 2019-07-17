import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthRegistroComponent } from './auth-registro/auth-registro.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { UsuariosService } from 'src/app/core/services/usuarios.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AuthComponent, AuthLoginComponent, AuthRegistroComponent],
  imports: [
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
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
	providers: [UsuariosService]
})
export class AuthModule { }
