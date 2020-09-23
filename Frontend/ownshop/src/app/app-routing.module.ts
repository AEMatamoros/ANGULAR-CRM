import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from 'src/app/pages/landing/landing.component';
import { LoginComponent} from 'src/app/pages/auth/login/login.component'
import { RegisterComponent} from 'src/app/pages/auth/register/register.component'
import { RegisterEnterpriseComponent} from 'src/app/pages/auth/register-enterprise/register-enterprise.component'
//rutas
const routes: Routes = [
  {"path":"",component:LandingComponent},
  {"path":"login",component:LoginComponent},
  {"path":"register",component:RegisterComponent},
  {"path":"registerEnterprise",component:RegisterEnterpriseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
