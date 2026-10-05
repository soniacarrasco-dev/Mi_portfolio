import { Component, HostListener, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  readonly name = signal('Sonia Carrasco');
  readonly title = signal('Desarrolladora Web Frontend (Angular) & Backend (NestJS)');

  readonly bio = signal(
    'Especializada en crear interfaces modernas y reactivas con Angular, con capacidad probada para construir microservicios y pipelines de sincronización asíncrona con NestJS, Redis y Elasticsearch.',
  );

  // Rutas a tus imágenes en la carpeta public
  readonly photoThumbnailUrl = signal('/assets/profile.png');
  readonly photoOriginalUrl = signal('/assets/profile-original.png'); // Si usas una sola, pon aquí la misma ruta

  // Estado del modal/lightbox
  readonly isModalOpen = signal(false);

  readonly skills = signal([
    'Angular (v17+ / Standalone / Signals)',
    'TypeScript & JavaScript Moderno',
    'NestJS (REST APIs / Workers Reactivos / Inyección de Dependencias)',
    'Bases de Datos & Caché (CouchDB / RedisJSON / Elasticsearch)',
    'Contenedores & Orquestación (Docker & Docker Compose)',
    'Gestión de Estado, Streams Asíncronos & Git Workflow',
  ]);

  openPhotoModal(): void {
    this.isModalOpen.set(true);
  }

  closePhotoModal(): void {
    this.isModalOpen.set(false);
  }

  // Permite cerrar el modal pulsando la tecla 'Escape'
  @HostListener('window:keydown.escape')
  onEscapePress(): void {
    if (this.isModalOpen()) {
      this.closePhotoModal();
    }
  }
}
