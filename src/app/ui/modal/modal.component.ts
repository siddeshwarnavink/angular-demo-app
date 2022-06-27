import { Component, EventEmitter, Input, Output } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  animations: [
    trigger('modalAnimation', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(-200px)'
        }),
        animate('300ms', style({
          opacity: 1,
          transform: 'translateY(0)'
        })),
      ]),
      transition(':leave', [
        animate('300ms', style({
          opacity: 0,
          transform: 'translateY(-200px)'
        }))
      ])
    ]),
  ],
})
export class ModalComponent {
  @Input() isOpen = false;
  @Output() onClose: EventEmitter<any> = new EventEmitter();

  closeModalHandler() {
    this.onClose.emit();
  }
}
