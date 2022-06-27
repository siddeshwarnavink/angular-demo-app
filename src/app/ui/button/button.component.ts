import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() buttonType = 'button';
  @Input() theme = 'default';
  @Input() flat = false;
  @Input() fab = false;
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  onClickHandler() {
    this.onClick.emit();
  }
}
