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
//rutas
const routes: Routes = [
  {"path":"",component:LandingComponent,},
  {"path":"login",component:LoginComponent},
  {"path":"register",component:RegisterComponent},
  {"path":"registerEnterprise",component:RegisterEnterpriseComponent},
  {'path':"main",component:MainComponent},
  {'path':"newstore",component:NewstoreComponent},
  {'path':"editstore/:id",component:EditstoreComponent},
  {'path':'editstore/code/editcode/:id',component:EditcodeComponent},
  {'path':'newpagew',component:WYSIWYGEditorComponent},
  {'path':'profile',component:UserprofileComponent},
  {'path':'storepage/:id',component:ViewpageComponent},
  {'path':'admin',component:AdminComponent},
  {'path':'admin/companies',component:CompaniesComponent},
  {'path':'admin/templates',component:TemplatesComponent},
  {'path':'admin/plans',component:PlansComponent},
  {'path':'admin/templatepreview/:id',component:TemplatepreviewComponent},
  {'path':'admin/templateedit/:id',component:EdittemplateComponent},
  {'path':'databank/:id',component:DatabankComponent},
  {'path':'client',component:ClientComponent},
  {'path':'products/:id',component:ProductpreviewComponent}
  
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
