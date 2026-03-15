import { Component } from '@angular/core';
import { NavbarUI } from './ui/navbar';
import { HeroSection } from './sections/hero';
import { GallerySection } from './sections/gallery';
import { ServicesSection } from './sections/services';
import { QuoteFormSection } from './sections/quote-form';
import { TestimonialsSection } from './sections/testimonials';
import { FooterUI } from './ui/footer';
import { WhatsappButton } from './ui/whatsapp-button';
import { LocationButton } from './ui/location-button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarUI,
    HeroSection,
    GallerySection,
    ServicesSection,
    TestimonialsSection,
    QuoteFormSection,
    FooterUI,
    WhatsappButton,
    LocationButton,
  ],
  template: `
    <navbar-ui />

    <main class="bg-cream">
      <hero-section />

      <gallery-section />

      <services-section />

      <testimonials-section />

      <quote-form-section />
    </main>

    <footer-ui />
    <location-button></location-button>
    <whatsapp-button />
  `,
})
export class App {}
