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

  GraduationCourseBreadcrumb = '';
  ProfessorsBreadcrumb = '';
  HomeBreadcrumb = 'active';
  ContatoBreadcrumb = '';

  showGraduations(){
    this.hideGraduationCourses = false;
    this.hideProfessors = true;
    this.hideContato = true;

    this.GraduationCourseBreadcrumb = 'active';
    this.HomeBreadcrumb = '';
    this.ProfessorsBreadcrumb = '';
    this.ContatoBreadcrumb = '';
  }

  showProfessors(){
    this.hideGraduationCourses = true;
    this.hideProfessors = false;
    this.hideContato = true;

    this.GraduationCourseBreadcrumb = '';
    this.HomeBreadcrumb = '';
    this.ProfessorsBreadcrumb = 'active';
    this.ContatoBreadcrumb = '';
  }
  
  homePage(){
    this.hideGraduationCourses = true;
    this.hideProfessors = true;
    this.hideContato = true;

    this.GraduationCourseBreadcrumb = '';
    this.ProfessorsBreadcrumb = '';
    this.HomeBreadcrumb = 'active';
    this.ContatoBreadcrumb = '';
  }

  showContato(){
    this.hideGraduationCourses = true;
    this.hideProfessors = true;
    this.hideContato = false;
    
    this.GraduationCourseBreadcrumb = '';
    this.ProfessorsBreadcrumb = '';
    this.HomeBreadcrumb = '';
    this.ContatoBreadcrumb = 'active';
  }
}
