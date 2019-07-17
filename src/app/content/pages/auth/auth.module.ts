import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthRegistroComponent } from './auth-registro/auth-registro.component';

@NgModule({
  declarations: [AuthComponent, AuthLoginComponent, AuthRegistroComponent],
  imports: [
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
  ]
})
export class AuthModule { }
