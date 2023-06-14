import { Component, HostListener } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  screenHeight: string = "0px";

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenHeight = `${window.innerHeight}px`;
  }

  constructor() {
    this.onResize();
  }
}
