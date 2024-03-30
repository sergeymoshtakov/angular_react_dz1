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
  textCase: boolean = false;
  name: string = '';
  fontSize: number = 12;
  fontStyle : string = 'Arial';
  color: string = '#000';
  text: any;
  
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

  changeCase(){
    this.textCase = !this.textCase;
  }
}
