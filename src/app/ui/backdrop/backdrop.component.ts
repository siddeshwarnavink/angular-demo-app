import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-backdrop',
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.css']
})
export class BackdropComponent {
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  onClickHandler() {
    this.onClick.emit();
  }
}
