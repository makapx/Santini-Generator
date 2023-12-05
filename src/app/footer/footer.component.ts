import { Component } from '@angular/core';

/**
 * Footer component.
 */
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  authors = [
    { name: 'Helias', url: 'https://github.com/Helias' },
    { name: 'makapx', url: 'https://github.com/makapx' },
    { name: 'infra-blue', url: 'https://github.com/infra-blue' },
    { name: 'GiuseppeBnn', url: 'https://github.com/GiuseppeBnn' },
  ];

  technologies = [
    { name: 'Angular', url: 'https://angular.io/' },
    { name: 'TailwindCSS', url: 'https://tailwindcss.com/' },
    { name: 'DaisyUI', url: 'https://daisyui.com/' },
  ];
}
