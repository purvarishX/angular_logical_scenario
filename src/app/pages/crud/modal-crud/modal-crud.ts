import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal-crud',
  imports: [],
  templateUrl: './modal-crud.html',
  styleUrl: './modal-crud.css',
})
export class ModalCrud {
  @ViewChild('MyModal') formModal !: ElementRef;

  addNew() {
    if (this.formModal) {
      this.formModal.nativeElement.style.display = 'block';
    }
  }

  closeModal() {
    this.formModal.nativeElement.style.display = 'none';
  }
}
