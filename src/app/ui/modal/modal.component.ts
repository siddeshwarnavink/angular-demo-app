import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() isOpen = false;
  @Output() onClose: EventEmitter<any> = new EventEmitter();

  closeModalHandler() {    
    this.onClose.emit();
  }
}
