import { Component, signal } from '@angular/core';
import { InputFieldComponent } from './Components/input-field-component/input-field-component';
import { ButtonComponent } from './Components/button-component/button-component';
import { NoteComponent } from './Components/note-component/note-component';

@Component({
  selector: 'app-root',
  imports: [InputFieldComponent, ButtonComponent, NoteComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('NoteApplication');
  triggerMessage = signal<string>('');
  counterForTrigger = signal<number>(0);
  
  ButtonTriggerReceive(action: string)
  {
    if (action == 'delete')
    {
      console.log('delete was clicked.')
      this.counterForTrigger.update(e => e + 1);
    }
  }

}
