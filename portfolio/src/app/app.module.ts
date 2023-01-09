import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { InfoComponent } from './componentes/info/info.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { RegistroComponent } from './registro/registro.component';
import { HttpClientModule } from '@angular/common/http';
import { PanelComponent } from './panel/panel.component';
import { Navbar2Component } from './panel/navbar2/navbar2.component';
import { RedesComponent } from './panel/redes/redes.component';
import { Banner2Component } from './panel/banner2/banner2.component';
import { Info2Component } from './panel/info2/info2.component';
import { Experiencia2Component } from './panel/experiencia2/experiencia2.component';
import { Educacion2Component } from './panel/educacion2/educacion2.component';
import { Habilidades2Component } from './panel/habilidades2/habilidades2.component';
import { Proyectos2Component } from './panel/proyectos2/proyectos2.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    InfoComponent,
    ExperienciaComponent,
    EstudiosComponent,
    HabilidadesComponent,
    ProyectosComponent,
    IndexComponent,
    LoginComponent,
    ErrorComponent,
    RegistroComponent,
    PanelComponent,
    Navbar2Component,
    RedesComponent,
    Banner2Component,
    Info2Component,
    Experiencia2Component,
    Educacion2Component,
    Habilidades2Component,
    Proyectos2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
