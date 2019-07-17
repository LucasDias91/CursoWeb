import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { PagesModule } from './pages.module';

const routes: Routes = [
	{
		path: '',
		component: PagesComponent,
		//canActivate: [NgxPermissionsGuard],
		data: {
			permissions: {
				//Niveis
				only: ['1', '2', '3', '4', '5', '6'],
			 	except: ['GUEST'],
				redirectTo: '/login'
			}
		},
		children: [
			{
				path: 'hospitais',
				//loadChildren: './hospitais/hospitais.module#HospitaisModule'
			}

		]
	},
	{
		path: 'auth',
		//canActivate: [NgxPermissionsGuard],
		loadChildren: './auth/auth.module#AuthModule',
		data: {
			permissions: {
				except: 'ADMIN'
			}
		},
	}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
