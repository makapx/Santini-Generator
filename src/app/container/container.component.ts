import { Component } from '@angular/core';
import { ApplicationCard, ApplicationType, ApplicationTypeLabel } from '../types';
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  
  applications: ApplicationType[] = [
    ApplicationType.senatoAccademico,
    ApplicationType.consiglioAmministrazione,
    ApplicationType.nucleoValutazione,
    ApplicationType.comitatoSport,
    ApplicationType.consiglioAmministrazioneErsu,
    ApplicationType.consiglioDipartimento,
    ApplicationType.consiglioCdl,
    ApplicationType.scuolaMedicina,
  ];

  applicationCards: ApplicationCard[] = [];

  constructor() {
    for (let i = 0; i < this.applications.length; i++) {
      this.applicationCards[i] = {
        key: this.applications[i],
        label: ApplicationTypeLabel[this.applications[i]],
        logo: '',
        options: '',
        isActive: true
      }
    }
  }
}
