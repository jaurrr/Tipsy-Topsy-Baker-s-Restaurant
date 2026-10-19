import { Component } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { RevealDirective } from '../../directives/reveal.directive';

interface Highlight {
  icon: string;
  title: string;
  text: string;
}

@Component({
  selector: 'app-highlights',
  standalone: true,
  imports: [IconComponent, RevealDirective],
  templateUrl: './highlights.component.html',
  styleUrl: './highlights.component.scss',
})
export class HighlightsComponent {
  items: Highlight[] = [
    { icon: 'leaf', title: '100% Pure Veg', text: 'Every dish in our kitchen is completely vegetarian.' },
    { icon: 'cake-slice', title: 'In-house Eggless Bakery', text: 'Cakes, pastries & biscuits baked fresh daily — all eggless.' },
    { icon: 'bike', title: 'Dine-in · Takeaway · Delivery', text: 'Eat with family here, take away, or get it delivered.' },
    { icon: 'wifi', title: 'Family-friendly Space', text: 'Cozy & casual — good for kids, groups and birthday parties.' },
  ];
}
