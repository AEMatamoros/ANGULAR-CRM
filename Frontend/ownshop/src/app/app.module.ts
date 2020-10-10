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
import { AddtemplateComponent } from './pages/components/stores/storepages/addtemplate/addtemplate.component';
import { UpdatedataComponent } from './pages/components/stores/updatestore/updatedata.component';
import { DeletetemplateComponent } from './pages/components/stores/storepages/deletetemplate/deletetemplate.component';
import { EditcodeComponent } from './pages/components/stores/storepages/editcode/editcode.component';
import { AceEditorModule } from 'ng2-ace-editor';
import { DeletestoreComponent } from './pages/components/stores/deletestore/deletestore.component';
import { ProductsComponent } from './pages/components/stores/storeproducts/products/products.component';
import { PagesComponent } from './pages/components/stores/storepages/mypages/pages.component';
import { AddproductComponent } from './pages/components/stores/storeproducts/addproduct/addproduct.component';
import { QuillModule } from 'ngx-quill';
import { WYSIWYGEditorComponent } from './pages/components/stores/storepages/wysiwygeditor/wysiwygeditor.component'
import { ReactiveFormsModule } from '@angular/forms'



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
    WYSIWYGEditorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SidebarModule.forRoot(),
    AceEditorModule,
    QuillModule.forRoot(),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
