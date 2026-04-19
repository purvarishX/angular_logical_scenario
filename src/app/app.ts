import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalCrud } from "./pages/crud/modal-crud/modal-crud";
import { SidePanel } from "./pages/crud/side-panel/side-panel";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ModalCrud, SidePanel],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_logical_scenarios');
}
