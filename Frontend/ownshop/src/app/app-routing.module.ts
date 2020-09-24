import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from 'src/app/pages/landing/landing.component';
import { LoginComponent} from 'src/app/pages/auth/login/login.component'
import { RegisterComponent} from 'src/app/pages/auth/register/register.component'
import { RegisterEnterpriseComponent} from 'src/app/pages/auth/register-enterprise/register-enterprise.component'
import { MainComponent } from 'src/app/pages/main/main.component'
import { SidebarComponent } from 'src/app/pages/shared/sidebar/sidebar.component'
//rutas
const routes: Routes = [
  {"path":"",component:LandingComponent},
  {"path":"login",component:LoginComponent},
  {"path":"register",component:RegisterComponent},
  {"path":"registerEnterprise",component:RegisterEnterpriseComponent},
  {'path':"main",component:MainComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
