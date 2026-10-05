import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  readonly email = 'soniacarrascodev@gmail.com';
  readonly mailtoUrl = `mailto:${this.email}?subject=${encodeURIComponent('Hablemos de un proyecto')}`;
}
