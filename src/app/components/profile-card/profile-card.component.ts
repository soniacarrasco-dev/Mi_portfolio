import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css'],
})
export class ProfileCardComponent {
  // Datos reactivos editables
  readonly name = signal('Sonia Carrasco');
  readonly role = signal('Frontend Developer | Angular & NestJS Explorer');
  readonly bio = signal(
    'Desarrolladora web enfocada en crear interfaces accesibles, fluidas y modulares con Angular. Con nociones de arquitecturas backend mediante NestJS y consumo de APIs REST.',
  );
  readonly photoUrl = signal(
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
  );

  readonly skills = signal<string[]>([
    'Angular',
    'TypeScript',
    'JavaScript (ES6+)',
    'HTML5 / Semantic Web',
    'CSS3 / Flexbox & Grid',
    'NestJS (REST APIs)',
    'Git & GitHub',
  ]);

  readonly featuredProjects = signal<Project[]>([
    {
      title: 'E-commerce Admin Dashboard',
      description:
        'Panel de control administrativo con visualización reactiva de ventas y control de inventario.',
      tech: ['Angular', 'TypeScript', 'Signals', 'CSS Grid'],
      link: 'https://github.com/tu-usuario/admin-dashboard',
    },
    {
      title: 'Task Tracker Fullstack',
      description: 'Aplicación de gestión de tareas diarias con autenticación JWT y API REST.',
      tech: ['Angular', 'NestJS', 'PostgreSQL'],
      link: 'https://github.com/tu-usuario/task-tracker',
    },
  ]);
}
