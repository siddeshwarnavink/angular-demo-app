import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() theme = 'default';
  @Input() flat = false;
  @Input() fab = false;

  constructor() { }

  ngOnInit(): void {
  }

}
