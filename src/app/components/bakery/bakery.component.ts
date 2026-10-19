import { Component } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { RevealDirective } from '../../directives/reveal.directive';
import { SITE, whatsappLink } from '../../data/site-data';

@Component({
  selector: 'app-bakery',
  standalone: true,
  imports: [IconComponent, RevealDirective],
  templateUrl: './bakery.component.html',
  styleUrl: './bakery.component.scss',
})
export class BakeryComponent {
  site = SITE;
  enquiryUrl = whatsappLink('Hi Tipsy Topsy! I want to enquire about a custom cake.');

  points = [
    { icon: 'party-popper', title: 'Birthday & Anniversary Cakes', text: 'Fresh, soft & made to order in your favourite flavours.' },
    { icon: 'sparkles', title: 'Custom Designs', text: 'Photo cakes, theme cakes & special decorations on request.' },
    { icon: 'users', title: 'Bulk & Party Orders', text: 'Pastries and snacks platters for school, office & family functions.' },
  ];
}
