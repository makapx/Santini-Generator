import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Logos } from '../types';
/**
 * This component is used to display the modal and select a logo.
 */
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  logos = Logos;
  currentPage = 0;
  currentLogos: any;
  logosPerPage = 3;
  lastPageIndex = Math.floor(this.logos.length / this.logosPerPage);
  @Input() selectedLogo: any;
  @Output() selectedLogoEvent$ = new EventEmitter<any>();
  @Input() mode = 'create';
  @Input() id = 'modalId';
  @Input() applicationKey = '';
  @Output() status = new EventEmitter<string>();

  constructor() {
    this.getPaginatedLogos();
  }

  /**
   * Get the paginated logos.
   */
  getPaginatedLogos() {
    this.currentLogos = this.logos.slice(
      this.currentPage * this.logosPerPage,
      (this.currentPage + 1) * this.logosPerPage
    );
  }

  /**
   * Get the next page of logos.
   *
   * @returns {void}
   */
  getNextPage() {
    this.currentPage++;
    if (this.currentPage > this.lastPageIndex) {
      this.currentPage = 0;
    }
    this.getPaginatedLogos();
  }

  /**
   * Get the previous page of logos.
   *
   * @returns {void}
   */
  getPreviousPage() {
    this.currentPage--;
    if (this.currentPage < 0) {
      this.currentPage = this.lastPageIndex;
    }
    this.getPaginatedLogos();
  }

  /**
   * Select a logo.
   *
   * @param {any} logo - The selected logo.
   */
  selectLogo(logo: any) {
    if (this.selectedLogo && this.selectedLogo.name === logo.name) {
      this.selectedLogo = null;
      return;
    }
    this.selectedLogo = logo;
  }

  /**
   * Confirm the logo selection.
   *
   * @param {any} event - The event.
   *
   * @returns {void}
   */
  confirmSelection(event: any) {
    this.selectedLogoEvent$.emit({
      selectedLogo: this.selectedLogo,
      applicationKey: this.applicationKey,
      mode: this.mode,
    });
  }

  /**
   * Reset the logo selection.
   *
   * @returns {void}
   */
  resetLogoSelection() {
    this.selectedLogo = null;
  }

  /**
   * Open the modal.
   *
   * @returns {void}
   */
  openModal() {
    return document.getElementById(this.id)?.classList.add('show');
  }

  /**
   * Close the modal.
   *
   * @returns {void}
   */
  closeModal() {
    this.status.emit('close');
    return document.getElementById(this.id)?.classList.remove('show');
  }
}
