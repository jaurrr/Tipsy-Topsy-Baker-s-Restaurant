import { Injectable, computed, signal } from '@angular/core';
import { MENU_MAP, MenuItem } from '../data/menu';
import { SITE, whatsappLink, orderMessage } from '../data/site-data';

export interface CartLine {
  item: MenuItem;
  qty: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private qtyById = signal<Record<string, number>>({});
  readonly drawerOpen = signal(false);

  readonly lines = computed<CartLine[]>(() =>
    Object.entries(this.qtyById())
      .filter(([, q]) => q > 0)
      .map(([id, qty]) => ({ item: MENU_MAP[id], qty }))
      .filter((l) => !!l.item),
  );

  readonly count = computed(() => this.lines().reduce((n, l) => n + l.qty, 0));
  readonly total = computed(() => this.lines().reduce((n, l) => n + l.qty * l.item.price, 0));

  qty(id: string): number {
    return this.qtyById()[id] ?? 0;
  }

  add(id: string): void {
    this.qtyById.update((m) => ({ ...m, [id]: (m[id] ?? 0) + 1 }));
  }

  removeOne(id: string): void {
    this.qtyById.update((m) => {
      const q = (m[id] ?? 0) - 1;
      const next = { ...m };
      if (q <= 0) delete next[id];
      else next[id] = q;
      return next;
    });
  }

  clear(): void {
    this.qtyById.set({});
  }

  openDrawer(): void {
    this.drawerOpen.set(true);
  }

  closeDrawer(): void {
    this.drawerOpen.set(false);
  }

  orderUrl(customerName: string): string {
    const lines = this.lines().map((l) => ({ qty: l.qty, name: l.item.name, price: l.item.price }));
    return whatsappLink(orderMessage(lines, this.total(), customerName));
  }

  chatUrl(): string {
    return whatsappLink(`Hi ${SITE.name}! I want to place an order.`);
  }
}
