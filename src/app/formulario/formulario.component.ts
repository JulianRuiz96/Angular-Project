import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Persona } from '../persona.model';
import { LoggingService } from '../LoggingService.service';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {

  //@Output() personaCreada = new EventEmitter<Persona>();

  nombreInput:string;
  apellidoInput:string;

  //@ViewChild('nombreInput') nombreInput: ElementRef;
  //@ViewChild('apellidoInput') apellidoInput: ElementRef;

  constructor(private loggingService:LoggingService, private personasService: PersonasService  ) { 
    this.personasService.saludar.subscribe(
      (indice: number) => alert("El indice es: "+ indice)
    ) 
  }

  agregarPersona() {
    let persona1 = new Persona(this.nombreInput, this.apellidoInput)
    //this.loggingService.enviaMensajeAConsola("Enviamos Nombre: "+persona1.nombre+" Enviamos Apellido: "+persona1.apellido)
    //this.personaCreada.emit(persona1);
    this.personasService.agregarPersona(persona1)
  }
} 