import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
  standalone: true
})
export class PopupComponent {
  @Output() close = new EventEmitter<boolean>();
  @Input() message="This is a custom message";
  @Input() title="Title";

  sendEvent() {
    this.close.emit(true);
  }

}
