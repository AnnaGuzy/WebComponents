import { Component, ViewChild, ElementRef } from '@angular/core';
import { HTMLStencilElement } from 'stencilcomponent/dist/types/stencil-public-runtime';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('test') myTestComponent: ElementRef<HTMLStencilElement>;
  onButtonPressed(event: any) {
    alert(event.detail);
  }
}
