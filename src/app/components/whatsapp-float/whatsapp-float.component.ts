import { Component, inject } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-whatsapp-float',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './whatsapp-float.component.html',
  styleUrl: './whatsapp-float.component.scss',
})
export class WhatsappFloatComponent {
  cart = inject(CartService);
}
