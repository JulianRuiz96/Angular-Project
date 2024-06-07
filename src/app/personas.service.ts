import { Persona } from './persona.model';
import { LoggingService } from './LoggingService.service';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class PersonasService {
  personas: Persona[] = [
    new Persona('Julian', 'Ruiz'),
    new Persona('Laura', 'Garcia'),
  ];

  saludar = new EventEmitter<number>();

  constructor(private loggingService : LoggingService){}

  agregarPersona(persona: Persona) {
    this.loggingService.enviaMensajeAConsola("Agregamos Persona:" + persona.nombre)
    this.personas.push(persona);
  }
}
