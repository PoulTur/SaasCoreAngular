import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})


export class MainComponent {
  constructor() { }

  selectedView: string = "Group Rules";

  selectView(event) {
    this.selectedView = event;
  }

}
