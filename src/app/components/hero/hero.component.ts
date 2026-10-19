import { Component, inject } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { CartService } from '../../services/cart.service';
import { RevealDirective } from '../../directives/reveal.directive';
import { SITE } from '../../data/site-data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [IconComponent, RevealDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  cart = inject(CartService);
  site = SITE;
}
