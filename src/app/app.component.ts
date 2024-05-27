import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Lista de personas';
  personas: Persona[]=[
    new Persona('Julian','Ruiz'),
    new Persona('Laura','Garcia'),
    new Persona('David','Morales')
  ];
  nombreInput: string = '';
  apellidoInput: string ='';

  agregarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    this.personas.push(persona1)
  }
}
