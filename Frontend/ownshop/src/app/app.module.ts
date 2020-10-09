import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/components/landing/landing.component';
import { LoginComponent } from './pages/components/auth/login/login.component';
import { RegisterComponent } from './pages/components/auth/register/register.component';
import { RegisterEnterpriseComponent } from './pages/components/auth/register-enterprise/register-enterprise.component';
import { MainComponent } from './pages/components/main/main.component';
import { SidebarModule } from 'ng-sidebar';
import { FooterComponent } from './pages/components/shared/footer/footer.component';
import { NewstoreComponent } from './pages/components/stores/newstore/newstore.component';
import { EditstoreComponent } from './pages/components/stores/editstore/editstore.component';
import { AddtemplateComponent } from './pages/components/stores/pages/modals/addtemplate/addtemplate.component';
import { UpdatedataComponent } from './pages/components/stores/updatedata/updatedata.component';
import { DeletetemplateComponent } from './pages/components/stores/pages/modals/deletetemplate/deletetemplate.component';
import { EditcodeComponent } from './pages/components/stores/pages/editcode/editcode.component';
import { AceEditorModule } from 'ng2-ace-editor';
import { DeletestoreComponent } from './pages/components/stores/deletestore/deletestore.component';
import { ProductsComponent } from './pages/components/stores/products/products.component';
import { PagesComponent } from './pages/components/stores/pages/pages/pages.component';
import { AddproductComponent } from './pages/components/stores/addproduct/addproduct.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    RegisterComponent,
    RegisterEnterpriseComponent,
    MainComponent,
    FooterComponent,
    NewstoreComponent,
    EditstoreComponent,
    AddtemplateComponent,
    UpdatedataComponent,
    DeletetemplateComponent,
    EditcodeComponent,
    DeletestoreComponent,
    ProductsComponent,
    PagesComponent,
    AddproductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule.forRoot(),
    AceEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
