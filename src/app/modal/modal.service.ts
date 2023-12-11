import { Injectable, Output, EventEmitter } from '@angular/core';
import { ComponentRef, ViewContainerRef } from '@angular/core';
import { ModalComponent } from './modal.component';
import { Observable } from 'rxjs';

/**
 * This service is used to open and close the modal component.
 *
 */
@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private componentRef!: ComponentRef<ModalComponent>;
  private isModalOpen = false;
  @Output() $closeEvent = new EventEmitter();

  constructor() {}

  /**
   * Open the modal component.
   *
   * @param {ViewContainerRef} entry - The view container reference.
   * @param {string} applicationKey - The application key.
   * @param {any} selectedLogo - The selected logo.
   * @param {string} mode - The mode of the modal.
   */
  openModal(
    entry: ViewContainerRef,
    applicationKey: string,
    selectedLogo: any,
    mode: string
  ) {
    if (!this.isModalOpen) {
      const observable = new Observable((observer) => {
        const componentRef = entry.createComponent(ModalComponent);
        componentRef.instance.applicationKey = applicationKey;
        componentRef.instance.selectedLogo = selectedLogo;
        componentRef.instance.mode = mode;

        componentRef.instance.openModal();
      });

      observable.subscribe();
    }
  }

  /**
   * Close the modal component.
   */
  closeModal() {
    this.$closeEvent.emit();
  }
}
