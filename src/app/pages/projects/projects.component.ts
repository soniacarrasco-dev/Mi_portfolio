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
      githubUrl: 'https://github.com/tu-usuario/smart-agenda-tfg',
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
      githubUrl: 'https://github.com/tu-usuario/tpv-cerveceria-offline',
    },
  ]);
}
