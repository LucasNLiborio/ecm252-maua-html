import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hideGraduationCourses = true;
  hideProfessors = true;
  hideContato = true;
  hideHome = true;
  hideAlunos = true;

  showGraduations(){
    this.hideGraduationCourses = false;
    this.hideProfessors = true;
    this.hideContato = true;
    this.hideHome = false;
    this.hideAlunos = true;
  }

  showProfessors(){
    this.hideGraduationCourses = true;
    this.hideProfessors = false;
    this.hideContato = true;
    this.hideHome = false;
    this.hideAlunos = true;
  }

  homePage(){
    this.hideGraduationCourses = true;
    this.hideProfessors = true;
    this.hideContato = true;
    this.hideHome = true;
    this.hideAlunos = true;
  }

  showContato(){
    this.hideGraduationCourses = true;
    this.hideProfessors = true;
    this.hideContato = false;
    this.hideHome = false;
    this.hideAlunos = true;
  }

  showAlunos(){
    this.hideGraduationCourses = true;
    this.hideProfessors = true;
    this.hideContato = true;
    this.hideHome = false;
    this.hideAlunos = false;
  }
  
}
