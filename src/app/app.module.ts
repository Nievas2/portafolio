import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { TechnologiesComponent } from './modules/technologies/technologies.component';
import { ProyectsComponent } from './modules/proyects/proyects.component';
import { StudiesComponent } from './modules/studies/studies.component';
import { ContactComponent } from './modules/contact/contact.component';
import { PerfilComponent } from './modules/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TechnologiesComponent,
    ProyectsComponent,
    StudiesComponent,
    ContactComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
