import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { ProfessoresComponent } from './professores/professores.component';
import { ContatoComponent } from './contato/contato.component';
import { CursosCadastroComponent } from './cursos-cadastro/cursos-cadastro.component';
import { CursosCartaoComponent } from './cursos-cartao/cursos-cartao.component';
import { FormularioAlunosComponent } from './formulario-alunos/formulario-alunos.component';


@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    ProfessoresComponent,
    ContatoComponent,
    CursosCadastroComponent,
    CursosCartaoComponent,
    FormularioAlunosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
