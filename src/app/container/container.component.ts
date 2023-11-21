import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  applications = [
    'senatoAccademico',
    'consiglioAmministrazione',
    'nucleoValutazione',
    'comitatoSport',
    'consiglioAmministrazioneErsu',
    'consiglioDipartimento',
    'consiglioCdl',
    'scuolaMedicina',
  ];

}
