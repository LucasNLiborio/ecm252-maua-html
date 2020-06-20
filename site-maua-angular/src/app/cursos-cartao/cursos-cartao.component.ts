import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cursos-cartao',
  templateUrl: './cursos-cartao.component.html',
  styleUrls: ['./cursos-cartao.component.css']
})
export class CursosCartaoComponent  {
  @Input() curso;
  
}
