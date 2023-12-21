import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { TechnologiesComponent } from './modules/technologies/technologies.component';
import { ProyectsComponent } from './modules/proyects/proyects.component';
import { StudiesComponent } from './modules/studies/studies.component';
import { ContactComponent } from './modules/contact/contact.component';
import { PerfilComponent } from './modules/perfil/perfil.component';
import { FormComponent } from './modules/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertsComponent } from './modules/alerts/alerts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TechnologiesComponent,
    ProyectsComponent,
    StudiesComponent,
    ContactComponent,
    PerfilComponent,
    FormComponent,
    AlertsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
