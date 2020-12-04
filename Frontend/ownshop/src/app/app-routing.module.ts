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
import { ViewpageComponent } from "./pages/components/stores/viewpage/viewpage.component";
import { AdminComponent } from './pages/components/admin/main/admin.component'
import { CompaniesComponent } from './pages/components/admin/companies/companies/companies.component'
import { TemplatesComponent } from './pages/components/admin/templates/templates/templates.component' 
import { PlansComponent } from './pages/components/admin/plans/plans/plans.component'
import { TemplatepreviewComponent } from './pages/components/admin/templates/templatepreview/templatepreview.component'
import { EdittemplateComponent } from './pages/components/admin/templates/edittemplate/edittemplate.component'
import { DatabankComponent } from './pages/components/stores/databank/databank.component';
import { ClientComponent } from './pages/components/client/client.component'
import { ProductpreviewComponent } from './pages/components/client/productpreview/productpreview.component'
import { CartComponent } from './pages/components/client/cart/cart.component'
import { BuysComponent } from './pages/components/client/buys/buys.component'

//Guard
import {AuthGuard} from 'src/app/guard/auth/auth.guard'
import {AdminGuard} from 'src/app/guard/auth/admin.guard'
//rutas
const routes: Routes = [
  {"path":"",component:LandingComponent,},
  {"path":"login",component:LoginComponent},
  {"path":"register",component:RegisterComponent},
  {"path":"registerEnterprise",component:RegisterEnterpriseComponent},
  {'path':"main",component:MainComponent,canActivate:[AuthGuard]},
  {'path':"newstore",component:NewstoreComponent,canActivate:[AuthGuard]},
  {'path':"editstore/:id",component:EditstoreComponent,canActivate:[AuthGuard]},
  {'path':'editstore/code/editcode/:id',component:EditcodeComponent,canActivate:[AuthGuard]},
  {'path':'newpagew',component:WYSIWYGEditorComponent,canActivate:[AuthGuard]},
  {'path':'profile',component:UserprofileComponent,canActivate:[AuthGuard]},
  {'path':'storepage/:id',component:ViewpageComponent,canActivate:[AuthGuard]},
  {'path':'admin',component:AdminComponent,canActivate:[AuthGuard,AdminGuard]},
  {'path':'admin/companies',component:CompaniesComponent,canActivate:[AuthGuard,AdminGuard]},
  {'path':'admin/templates',component:TemplatesComponent,canActivate:[AuthGuard,AdminGuard]},
  {'path':'admin/plans',component:PlansComponent,canActivate:[AuthGuard,AdminGuard]},
  {'path':'admin/templatepreview/:id',component:TemplatepreviewComponent,canActivate:[AuthGuard,AdminGuard]},
  {'path':'admin/templateedit/:id',component:EdittemplateComponent,canActivate:[AuthGuard,AdminGuard]},
  {'path':'databank/:id',component:DatabankComponent,canActivate:[AuthGuard]},
  {'path':'client',component:ClientComponent,canActivate:[AuthGuard]},
  {'path':'products/:id',component:ProductpreviewComponent,canActivate:[AuthGuard]},
  {'path':'cart',component:CartComponent,canActivate:[AuthGuard]},
  {'path':'buys',component:BuysComponent,canActivate:[AuthGuard]},
  
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
