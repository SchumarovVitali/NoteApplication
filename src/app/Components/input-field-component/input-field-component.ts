import { Component, effect, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-field-component',
  imports: [FormsModule],
  templateUrl: './input-field-component.html',
  styleUrl: './input-field-component.css',
})
export class InputFieldComponent {

  inputMessage = input<number>(0);
  text = '';

  constructor() {
    effect(() => { //this effect runs, when the value of the signal changes.
      console.log('trigger was clicked');
      this.inputMessage();
      this.text = '';
    })
  }
  
}
