import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // selector: 'app-simple',
  templateUrl: './simple.component.html'
})
export class SimpleComponent implements OnInit {
  @Input() title;
  @Input() details;
  @Output() display = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  showInfo() {
    this.display.emit(`Details: ${this.details}`);
  }
}
