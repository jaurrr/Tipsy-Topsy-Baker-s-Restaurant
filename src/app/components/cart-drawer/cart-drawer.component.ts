import { Component, HostListener, effect, inject, signal } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-drawer',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './cart-drawer.component.html',
  styleUrl: './cart-drawer.component.scss',
})
export class CartDrawerComponent {
  cart = inject(CartService);
  customerName = signal('');

  constructor() {
    effect(() => {
      document.body.style.overflow = this.cart.drawerOpen() ? 'hidden' : '';
    });
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.cart.closeDrawer();
  }

  onNameInput(e: Event): void {
    this.customerName.set((e.target as HTMLInputElement).value);
  }

  order(): void {
    window.open(this.cart.orderUrl(this.customerName()), '_blank', 'noopener');
  }
}
