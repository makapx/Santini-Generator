import { Component, Input, OnInit } from '@angular/core';

import { ApplicationType, ApplicationCard} from '../types';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() application!: ApplicationCard;
  @Input() selectedLogo!: any;
  isActive = true;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Get the color of the card.
   * 
   * @returns {string} Color of the card.
   */
  getColorReference(): string {
    return this.application.colorLabelReference;
  }

  /**
   * Get the type of the card.
   * 
   * @returns {string} Type of the card.
   */
  getType(): string {
    return this.application.type;
  }

  bindSelectedLogo(logo: any) {
    this.selectedLogo = logo;
  }

  toggleActive() {
    this.isActive = !this.isActive;
  }
}
