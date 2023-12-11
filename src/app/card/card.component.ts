import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ApplicationType, ApplicationCard } from '../types';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() application!: ApplicationCard;
  @Input() selectedLogo!: any;
  isActive = true;
  isModalOpen = false;

  constructor(private modalService: ModalService) {}

  @ViewChild('modal', { read: ViewContainerRef })
  entry!: ViewContainerRef;

  ngOnInit(): void {}

  /**
   * Get the color of the card.
   *
   * @returns {string} Color of the card.
   */
  getApplicationLabel(): string {
    return this.application.label;
  }

  /**
   * Get the type of the card.
   *
   * @returns {string} Type of the card.
   */
  getApplicationKey(): string {
    return this.application.key;
  }

  /**
   * Bind the selected logo.
   *
   * @returns {string} Selected logo.
   */
  bindSelectedLogo(logo: any) {
    this.selectedLogo = logo;
  }

  /**
   * Toggle the active state of the card.
   *
   * @returns {void}
   */
  toggleActive() {
    this.isActive = !this.isActive;
  }

  /**
   * Get the color of the card.
   *
   * @param {string} applicationKey The key of the application.
   *
   * @returns {string} Color of the card.
   */
  getColorReference(applicationKey: string): string {
    return 'bg-' + applicationKey;
  }

  /**
   * Open the modal.
   *
   * @returns {void}
   */
  openModal() {
    this.modalService.openModal(
      this.entry,
      this.application.key,
      this.selectedLogo,
      'create'
    );
    this.isModalOpen = true;
  }
}
