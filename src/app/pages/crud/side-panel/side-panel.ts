import { NgClass } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-side-panel',
  imports: [NgClass],
  templateUrl: './side-panel.html',
  styleUrl: './side-panel.css',
})
export class SidePanel {

  isPanelOpen: WritableSignal<boolean> = signal<boolean>(false);
  // isPanelOpenSecond: WritableSignal<boolean> = signal<boolean>(true);

  view = signal<string>('List');

  addNew() {
    // this.isPanelOpen.set(true);
    // this.isPanelOpenSecond.set(false);
    this.view.set('Form')
  }

  save() {
    // this.isPanelOpen.set(false);
    // this.isPanelOpenSecond.set(true);
    this.view.set('List')
  }

  close() {
    // this.isPanelOpen.set(false);
    // this.isPanelOpenSecond.set(true);
    this.view.set('List')
  }

  toggleView() {
    this.view.set(this.view() === 'List' ? 'Form' : 'List');
  }
}
