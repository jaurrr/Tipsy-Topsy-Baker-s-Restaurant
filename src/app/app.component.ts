import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { HighlightsComponent } from './components/highlights/highlights.component';
import { MenuSectionComponent } from './components/menu-section/menu-section.component';
import { BakeryComponent } from './components/bakery/bakery.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { VisitComponent } from './components/visit/visit.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartDrawerComponent } from './components/cart-drawer/cart-drawer.component';
import { WhatsappFloatComponent } from './components/whatsapp-float/whatsapp-float.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    HighlightsComponent,
    MenuSectionComponent,
    BakeryComponent,
    ReviewsComponent,
    VisitComponent,
    FooterComponent,
    CartDrawerComponent,
    WhatsappFloatComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
