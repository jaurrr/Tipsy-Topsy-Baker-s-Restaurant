import { Component, HostListener, inject, signal } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { CartService } from '../../services/cart.service';
import { SITE } from '../../data/site-data';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  cart = inject(CartService);
  site = SITE;
  scrolled = signal(false);
  mobileOpen = signal(false);

  links = [
    { label: 'Home', href: '#home' },
    { label: 'Menu', href: '#menu' },
    { label: 'Bakery', href: '#bakery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Visit Us', href: '#visit' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 24);
  }

  toggleMobile(): void {
    this.mobileOpen.update((v) => !v);
  }

  closeMobile(): void {
    this.mobileOpen.set(false);
  }
}
