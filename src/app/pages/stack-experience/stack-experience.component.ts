import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-stack-experience',
  standalone: true,
  templateUrl: './stack-experience.component.html',
  styleUrls: ['./stack-experience.component.css'],
})
export class StackExperienceComponent {
  readonly concepts = signal([
    {
      title: 'Modelado y Tipado Compartido (DTOs e Interfaces)',
      description:
        'Aprovechamiento de TypeScript tanto en Angular como en NestJS. Definición de contratos de datos claros para garantizar que los modelos de la interfaz coincidan con las respuestas del backend, reduciendo incoherencias en runtime.',
    },
    {
      title: 'Consumo de APIs REST con Servicios Reactivos',
      description:
        'Conocimiento del flujo de petición y respuesta: inyección del `HttpClient` de Angular para comunicarse con los controladores de NestJS (`@Get()`, `@Post()`, `@Body()`), gestionando respuestas asíncronas y transformaciones de datos limpias.',
    },
    {
      title: 'Manejo de Errores e Interceptores HTTP',
      description:
        'Comprensión del tratamiento de respuestas HTTP estándar emitidas por NestJS (códigos de estado 400, 401, 404, 500) para mostrar feedback contextual, notificaciones de error y estados de carga coherentes en la interfaz.',
    },
    {
      title: 'Arquitectura Modular Homogénea',
      description:
        'Ambos frameworks comparten una filosofía similar basada en inyección de dependencias, decoradores y separación de responsabilidades. Esto me facilita leer, auditar y colaborar en código NestJS sin salir de mi zona de confort en TypeScript.',
    },
  ]);
}
