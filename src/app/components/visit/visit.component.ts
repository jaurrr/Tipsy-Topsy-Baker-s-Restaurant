import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { IconComponent } from '../icon/icon.component';
import { CartService } from '../../services/cart.service';
import { RevealDirective } from '../../directives/reveal.directive';
import { SITE } from '../../data/site-data';

@Component({
  selector: 'app-visit',
  standalone: true,
  imports: [IconComponent, RevealDirective],
  templateUrl: './visit.component.html',
  styleUrl: './visit.component.scss',
})
export class VisitComponent {
  cart = inject(CartService);
  site = SITE;
  mapUrl: SafeResourceUrl;

  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  constructor() {
    this.mapUrl = inject(DomSanitizer).bypassSecurityTrustResourceUrl(SITE.mapsEmbedUrl);
  }
}
