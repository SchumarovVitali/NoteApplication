import { Component, signal } from '@angular/core';
import { ButtonComponent } from './Components/button-component/button-component';

@Component({
  selector: 'app-root',
  imports: [ButtonComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('NoteApplication');
}
