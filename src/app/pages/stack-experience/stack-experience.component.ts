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
      title: 'Tratamiento de Datos en Tiempo Real & Streaming',
      description:
        'Experiencia implementando daemons en NestJS que consumen streams continuos (como el feed `_changes` de CouchDB) y propagan mutaciones a motores como Redis y Elasticsearch, comprendiendo el ciclo de vida de los datos desde su origen hasta el cliente.',
    },
    {
      title: 'Arquitectura Modular Homogénea & Dockerización',
      description:
        'Ambos frameworks comparten una filosofía similar basada en inyección de dependencias, decoradores y separación de responsabilidades. Uso de Docker Compose para orquestar la infraestructura local (Redis, CouchDB, Elasticsearch) de forma reproducible.',
    },
  ]);
}
