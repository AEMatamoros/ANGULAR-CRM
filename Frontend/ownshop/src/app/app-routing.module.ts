import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from 'src/app/pages/components/landing/landing.component';
import { LoginComponent} from 'src/app/pages/components/auth/login/login.component'
import { RegisterComponent} from 'src/app/pages/components/auth/register/register.component'
import { RegisterEnterpriseComponent} from 'src/app/pages/components/auth/register-enterprise/register-enterprise.component'
import { MainComponent } from 'src/app/pages/components/main/main.component'
import { NewstoreComponent } from 'src/app/pages/components/stores/newstore/newstore.component'
import { EditstoreComponent } from 'src/app/pages/components/stores/editstore/editstore.component'
import { EditcodeComponent } from 'src/app/pages/components/stores/storepages/editcode/editcode.component'
import { WYSIWYGEditorComponent } from './pages/components/stores/storepages/wysiwygeditor/wysiwygeditor.component'
import { UserprofileComponent } from './pages/components/profile/userprofile/userprofile.component'

//rutas
const routes: Routes = [
  {"path":"",component:LandingComponent,},
  {"path":"login",component:LoginComponent},
  {"path":"register",component:RegisterComponent},
  {"path":"registerEnterprise",component:RegisterEnterpriseComponent},
  {'path':"main",component:MainComponent},
  {'path':"newstore",component:NewstoreComponent},
  {'path':"editstore",component:EditstoreComponent},
  {'path':'editstore/editcode',component:EditcodeComponent},
  {'path':'newpagew',component:WYSIWYGEditorComponent},
  {'path':'profile',component:UserprofileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
