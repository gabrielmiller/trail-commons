import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'trail-commons-app',
  styleUrls: ['trail-commons.component.css'],
  templateUrl: 'trail-commons.component.html'
})
export class TrailCommonsAppComponent {
  isNavActive: boolean;
  
  constructor() {
    this.isNavActive = false;
  }
}
