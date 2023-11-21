import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Logos } from '../types';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
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

  constructor() {
    this.getPaginatedLogos();
  }

  getPaginatedLogos() {
    this.currentLogos = this.logos.slice(this.currentPage * this.logosPerPage, (this.currentPage + 1) * this.logosPerPage);
  }

  getNextPage() {
    this.currentPage++;
    if(this.currentPage > this.lastPageIndex) {
      this.currentPage = 0;
    }
    this.getPaginatedLogos();
  }

  getPreviousPage() {
    this.currentPage--;
    if(this.currentPage < 0) {
      this.currentPage = this.lastPageIndex;
    }
    this.getPaginatedLogos();
  }

  selectLogo(logo: any) {
    if(this.selectedLogo && this.selectedLogo.name === logo.name) {
      this.selectedLogo = null;
      return;
    }
    this.selectedLogo = logo;
  }

  confirmSelection(event : any) {
    this.selectedLogoEvent$.emit(this.selectedLogo);
  }

  resetLogoSelection() {
    this.selectedLogo = null;
  }
}
