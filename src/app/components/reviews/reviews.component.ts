import { Component } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { RevealDirective } from '../../directives/reveal.directive';
import { REVIEWS } from '../../data/menu';
import { SITE } from '../../data/site-data';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [IconComponent, RevealDirective],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss',
})
export class ReviewsComponent {
  reviews = REVIEWS;
  site = SITE;
}
