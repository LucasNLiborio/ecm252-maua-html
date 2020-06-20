import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-cursos-cadastro',
  templateUrl: './cursos-cadastro.component.html',
  styleUrls: ['./cursos-cadastro.component.css']
})
export class CursosCadastroComponent {

  @Output() cursoAdicionado = new EventEmitter();


  cadastrarCurso(nome, descricao, url){
    const curso = {
      nome: nome,
      descricao: descricao,
      url: url
    };
    this.cursoAdicionado.emit(curso);
  }
}
