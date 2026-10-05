// projects.component.ts
import { Component, signal } from '@angular/core';

export interface ProjectDetail {
  id: string;
  title: string;
  category: string;
  summary: string;
  highlights: string[];
  tech: string[];
  githubUrl: string;
  demoUrl?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  readonly projectList = signal<ProjectDetail[]>([
    {
      id: 'realtime-db-sync-pipeline',
      title: 'Realtime Distributed Database Sync Pipeline',
      category: 'Backend Distribuido & Event-Driven Streaming',
      summary:
        'Worker reactivo asíncrono diseñado para la sincronización continua de mutaciones de datos en tiempo real. Consume feeds HTTP continuos (_changes) desde CouchDB y traslada el estado transformado concurrentemente hacia Redis (RedisJSON) para caché de ultra baja latencia y Elasticsearch para búsquedas analíticas.',
      highlights: [
        'Ingesta streaming reactiva mediante HTTP chunked transfer sin sobrecarga de sondeo (polling).',
        'Persistencia de documentos y estado estructurado en memoria usando Redis Stack (JSON.SET).',
        'Indexación asíncrona tolerante a fallos contra nodos de Elasticsearch 8.',
        'Entorno de orquestación reproducible en Docker Compose y generador de datos sintéticos (seeder).',
      ],
      tech: [
        'NestJS',
        'TypeScript',
        'CouchDB',
        'Redis Stack (RedisJSON)',
        'Elasticsearch',
        'Docker Compose',
      ],
      githubUrl: 'https://github.com/soniacarrasco-dev/realtime-db-sync-pipeline',
    },
    {
      id: 'smart-agenda',
      title: 'Smart Agenda Académica (Proyecto Fin de Grado)',
      category: 'Herramienta de Productividad & Organización',
      summary:
        'Aplicación web concebida para solventar las dificultades reales de organización durante el ciclo formativo. Permite centralizar tareas, entregas de prácticas, recordatorios automáticos y seguimiento del ritmo de estudio mediante una interfaz adaptativa e intuitiva.',
      highlights: [
        'Estructuración de componentes modulares y reutilizables en Angular.',
        'Gestión reactiva de eventos y alertas según la proximidad de los plazos.',
        'Enfoque prioritario en UX/UI limpia y accesible para evitar sobrecarga visual.',
      ],
      tech: ['Angular', 'TypeScript', 'Reactive Forms', 'CSS Grid/Flexbox'],
      githubUrl: 'https://github.com/soniacarrasco-dev/smart-agenda-tfg',
      demoUrl: 'https://smart-agenda-demo.vercel.app',
    },
    {
      id: 'offline-pos',
      title: 'TPV Offline para Cervecería',
      category: 'Software de Gestión Comercial (Offline-First)',
      summary:
        'Punto de venta diseñado a medida para operar sin interrupciones incluso ante caídas de conexión a Internet. Facilita la gestión rápida de comandas, catálogo de productos con tarifas dinámicas, cálculo de arqueos de caja al cierre de jornada y exportación estructurada de informes.',
      highlights: [
        'Persistencia local robusta para permitir operaciones comerciales ininterrumpidas.',
        'Módulos de cobro rápido con cálculo automático de cambio y cuadre de caja.',
        'Exportación de informes diarios de ventas y stock en formatos legibles.',
      ],
      tech: ['Angular', 'TypeScript', 'LocalStorage / IndexedDB', 'Modular CSS', 'Export APIs'],
      githubUrl: 'https://github.com/soniacarrasco-dev/tpv-cerveceria-offline',
    },
  ]);
}
