import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html'
})
export class NavMenuComponent implements OnInit{

  items: MenuItem[];
  @Output() selectView = new EventEmitter<string>();

  ngOnInit() {
    this.items = [
      { label: 'Activities', icon: 'fa fa-fw fa-clone', command: (event) => this.selectView.emit(event.item.label) },
      { label: 'Classes', icon: 'fa fa-fw fa-bar-chart', command: (event) => this.selectView.emit(event.item.label) }
    ];
  }

}
