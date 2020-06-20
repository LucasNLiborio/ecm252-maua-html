import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { ProfessoresComponent } from './professores/professores.component';
import { ContatoComponent } from './contato/contato.component';
import { CursosCadastroComponent } from './cursos-cadastro/cursos-cadastro.component';
import { CursosCartaoComponent } from './cursos-cartao/cursos-cartao.component';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    ProfessoresComponent,
    ContatoComponent,
    CursosCadastroComponent,
    CursosCartaoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
