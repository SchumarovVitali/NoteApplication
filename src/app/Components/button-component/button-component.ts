import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-button-component',
  imports: [],
  templateUrl: './button-component.html',
  styleUrl: './button-component.css',
})
export class ButtonComponent {
  ButtonTitle = input<string>('default');
  ButtonTrigger = output<string>();

  ButtonTriggerClicked():void 
  {
    if (this.ButtonTitle() == 'Save')
    {
      this.ButtonTrigger.emit('save');
    } 
    else if (this.ButtonTitle() == 'Delete')
    {
      this.ButtonTrigger.emit('delete');
    }
    else
    {
      console.log('Button unknown because it does not have a proper name.');
    }
  }
}
