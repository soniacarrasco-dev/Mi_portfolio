import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'proyectos',
    loadComponent: () =>
      import('./pages/projects/projects.component').then((m) => m.ProjectsComponent),
  },
  {
    path: 'experiencia-fullstack',
    loadComponent: () =>
      import('./pages/stack-experience/stack-experience.component').then(
        (m) => m.StackExperienceComponent,
      ),
  },
  {
    path: 'contacto',
    loadComponent: () =>
      import('./pages/contact/contact.component').then((m) => m.ContactComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
