import { Component, computed, inject, signal } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { CartService } from '../../services/cart.service';
import { RevealDirective } from '../../directives/reveal.directive';
import { MENU_CATS, MENU_ITEMS, MenuItem } from '../../data/menu';

@Component({
  selector: 'app-menu-section',
  standalone: true,
  imports: [IconComponent, RevealDirective],
  templateUrl: './menu-section.component.html',
  styleUrl: './menu-section.component.scss',
})
export class MenuSectionComponent {
  cart = inject(CartService);
  cats = MENU_CATS;
  activeCat = signal(MENU_CATS[0].id);
  query = signal('');

  items = computed<MenuItem[]>(() => {
    const q = this.query().trim().toLowerCase();
    return MENU_ITEMS.filter(
      (i) =>
        i.cat === this.activeCat() &&
        (!q || i.name.toLowerCase().includes(q) || i.desc.toLowerCase().includes(q)),
    );
  });

  countFor(catId: string): number {
    return MENU_ITEMS.filter((i) => i.cat === catId).length;
  }

  onSearch(e: Event): void {
    this.query.set((e.target as HTMLInputElement).value);
  }

  clearSearch(): void {
    this.query.set('');
  }

  tagClass(tag: NonNullable<MenuItem['tag']>): string {
    return tag === 'Bestseller' ? 'tag-best' : tag === "Chef's Special" ? 'tag-chef' : 'tag-egg';
  }
}
