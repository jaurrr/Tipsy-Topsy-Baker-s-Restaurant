import { Component } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { SITE } from '../../data/site-data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  site = SITE;
  year = new Date().getFullYear();

  links = [
    { label: 'Home', href: '#home' },
    { label: 'Menu', href: '#menu' },
    { label: 'Bakery', href: '#bakery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Visit Us', href: '#visit' },
  ];
}
