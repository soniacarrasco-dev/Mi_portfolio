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
  readonly title = signal('Desarrolladora Web Frontend (Angular)');
  readonly bio = signal(
    'Especializada en crear interfaces modernas, componentes desacoplados y soluciones web con Angular. Interés constante por la usabilidad, el diseño reactivo y la integración limpia con servicios backend.',
  );

  // Rutas a tus imágenes en la carpeta public
  readonly photoThumbnailUrl = signal('/assets/profile.png');
  readonly photoOriginalUrl = signal('/assets/profile-original.png'); // Si usas una sola, pon aquí la misma ruta

  // Estado del modal/lightbox
  readonly isModalOpen = signal(false);

  readonly skills = signal([
    'Angular (v17+ / Standalone / Signals)',
    'TypeScript & JavaScript Moderno',
    'HTML5 Semántico & CSS Modular',
    'NestJS (REST APIs / Controladores / Servicios)',
    'Gestión de Estado y Servicios Reactivos',
    'Git & GitHub Workflow',
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
