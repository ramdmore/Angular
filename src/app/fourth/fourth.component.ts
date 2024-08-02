import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: `ea32-fourth`,
  templateUrl: `./fourth.component.html`,
  styleUrl: `./fourth.component.css`,
})
export class FourthComponent {
  @Input() myIncomingData: any;
  // after adding @Input() the variable is converted to DOM property

  @Output() sendDataToParent = new EventEmitter();
  // if we write the new EventEmitter() then it converted to event

  buttonClicked() {
    console.log('buttonClicked triggered');
    this.sendDataToParent.emit('Ram More');
  }
}

// LOCAL API
