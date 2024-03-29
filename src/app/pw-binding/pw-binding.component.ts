import { Component } from '@angular/core';

@Component({
  selector: 'app-pw-binding',
  templateUrl: './pw-binding.component.html',
  styleUrl: './pw-binding.component.css'
})
export class PwBindingComponent {
  isBold: boolean = false;
  isItalic: boolean = false;
  isUnderlined: boolean = false;
  name: string = '';
  fontSize: number = 12;
  color: string = '#000';
  
  showAlert(event : Event) {
    console.log(event);
  }

  changeBold(){
    this.isBold = !this.isBold;
  }

  changeItalic(){
    this.isItalic = !this.isItalic;
  }

  changeUnderlined(){
    this.isUnderlined = !this.isUnderlined;
  }
}
