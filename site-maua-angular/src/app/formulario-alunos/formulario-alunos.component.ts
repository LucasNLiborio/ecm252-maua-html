import { Component } from '@angular/core';
import { Aluno } from '../model/aluno';
@Component({
  selector: 'app-formulario-alunos',
  templateUrl: './formulario-alunos.component.html',
  styleUrls: ['./formulario-alunos.component.css']
})
export class FormularioAlunosComponent {

  aluno: Aluno = new Aluno();
  alunos = [
    {
      nome: 'Diogo Alves',
      idade: 20,
      email: 'diogoalves@gmail.com',
      curso: 'Administração'
    },
    {
      nome: 'Manuel Iglesias',
      idade: 18,
      email: 'maiglesas@gmail.com',
      curso: 'Engenharia da Computação'
    },
    {
      nome: 'Maria Antonieta',
      idade: 22,
      email: 'maria_antonieta@hotmail.com',
      curso: 'Engenharia de Controle e Automação'
    }
  ];

  cursos = ['Administração', 'Design', 'Engenharia de Alimentos', 'Engenharia Civil', 'Engenharia da Computacao', 
  'Engenharia de Controle e Automação', 'Engenharia Elétrica', 'Engenharia Eletrônica', 'Engenharia Mecânica']

  salvarAluno(alunoForm): void{
    this.aluno = new Aluno();
    this.aluno.nome = alunoForm.value.nome;
    this.aluno.idade = alunoForm.value.idade;
    this.aluno.email = alunoForm.value.email;
    this.aluno.curso = alunoForm.value.curso;

    console.log(this.aluno);
    this.alunos = [this.aluno, ...this.alunos];
    console.log(this.alunos);
  };

  obterEstilosParaOCard(){
    return{
      padding: '8px',
      border: '2px solid blue',
      'border-radius': '8px'
    }
  };

  obterEstiloParaOTituloDoCard(){
    return{
      fontWeight: 'bold',
      borderBottom: '1px solid blue',
      marginBottom: '1.5rem'
    }
  };

  ehEngenharia(curso){
   console.log(curso)
   return !(curso == 'Administração' || curso == 'Design');
  }

}
