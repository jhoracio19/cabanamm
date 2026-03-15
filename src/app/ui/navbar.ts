import { Component, signal, HostListener } from '@angular/core';

@Component({
  selector: 'navbar-ui',
  standalone: true,
  template: `
    <header
      class="fixed top-0 left-0 w-full z-50 transition-all duration-500"
      [class]="
        scrolled()
          ? 'bg-[#0a0806]/95 backdrop-blur-md border-b border-[#c9a84c]/15 py-0'
          : 'bg-transparent py-0'
      "
    >
      <!-- Línea dorada superior (solo cuando scrolled) -->
      @if (scrolled()) {
        <div
          class="h-px bg-[linear-gradient(90deg,transparent_0%,#b8960c_30%,#e8c84a_50%,#b8960c_70%,transparent_100%)]"
        ></div>
      }

      <nav class="max-w-7xl mx-auto px-8 flex items-center justify-between h-[72px]">
        <!-- Logo -->
        <a href="#inicio" class="flex flex-col leading-none group">
          <span
            class="font-serif italic text-[#c9a84c] text-xl tracking-wide
                       group-hover:text-[#e8c84a] transition-colors duration-300"
          >
            Cabaña
          </span>
          <span class="text-[#f5efe0]/90 text-[10px] tracking-[0.3em] uppercase font-light">
            Maria Maria
          </span>
        </a>

        <!-- Desktop menu -->
        <ul class="hidden md:flex items-center gap-10">
          @for (item of navItems; track item.href) {
            <li>
              <a
                [href]="item.href"
                class="relative text-[11px] tracking-[0.2em] uppercase font-light
                        text-[#f5efe0]/65 hover:text-[#c9a84c]
                        transition-colors duration-300
                        after:content-[''] after:absolute after:bottom-[-4px] after:left-0
                        after:w-0 after:h-px after:bg-[#c9a84c]
                        after:transition-all after:duration-300 hover:after:w-full"
              >
                {{ item.label }}
              </a>
            </li>
          }

          <!-- CTA -->
          <li>
            <a
              href="#cotizacion"
              class="relative overflow-hidden border border-[#c9a84c]/70 text-[#c9a84c]
                      px-6 py-2.5 text-[10px] tracking-[0.2em] uppercase font-light
                      transition-colors duration-300 hover:text-[#e8c84a] hover:border-[#c9a84c]
                      before:content-[''] before:absolute before:inset-0
                      before:bg-[#c9a84c]/10 before:scale-x-0 before:origin-left
                      before:transition-transform before:duration-300 hover:before:scale-x-100"
            >
              Cotizar evento
            </a>
          </li>
        </ul>

        <!-- Mobile button -->
        <button class="md:hidden flex flex-col gap-[5px] p-2 group" (click)="toggleMenu()">
          <span
            class="block w-6 h-px bg-[#c9a84c] transition-all duration-300"
            [class]="menuOpen() ? 'rotate-45 translate-y-[6px]' : ''"
          ></span>
          <span
            class="block w-4 h-px bg-[#f5efe0]/60 transition-all duration-300"
            [class]="menuOpen() ? 'opacity-0 w-0' : ''"
          ></span>
          <span
            class="block w-6 h-px bg-[#f5efe0]/60 transition-all duration-300"
            [class]="menuOpen() ? '-rotate-45 -translate-y-[6px]' : ''"
          ></span>
        </button>
      </nav>

      <!-- Mobile menu -->
      <div
        class="md:hidden overflow-hidden transition-all duration-500 ease-in-out"
        [class]="menuOpen() ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'"
      >
        <div class="bg-[#0d0a06]/98 backdrop-blur-md border-t border-[#c9a84c]/10 px-8 py-8">
          <!-- Línea ornamental -->
          <div class="flex items-center gap-3 mb-8">
            <span
              class="flex-1 h-px bg-[linear-gradient(90deg,rgba(201,168,76,0.4),transparent)]"
            ></span>
            <span class="w-[5px] h-[5px] bg-[#c9a84c]/60 rotate-45"></span>
            <span
              class="flex-1 h-px bg-[linear-gradient(90deg,transparent,rgba(201,168,76,0.4))]"
            ></span>
          </div>

          <ul class="flex flex-col gap-6">
            @for (item of navItems; track item.href) {
              <li>
                <a
                  [href]="item.href"
                  (click)="toggleMenu()"
                  class="text-[11px] tracking-[0.25em] uppercase font-light
                          text-[#f5efe0]/65 hover:text-[#c9a84c]
                          transition-colors duration-300"
                >
                  {{ item.label }}
                </a>
              </li>
            }
            <li class="pt-2">
              <a
                href="#cotizacion"
                (click)="toggleMenu()"
                class="block text-center border border-[#c9a84c]/70 text-[#c9a84c]
                        px-6 py-3 text-[10px] tracking-[0.2em] uppercase font-light
                        hover:bg-[#c9a84c]/10 transition-colors duration-300"
              >
                Cotizar evento
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class NavbarUI {
  menuOpen = signal(false);
  scrolled = signal(false);

  navItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Galería', href: '#galeria' },
    { label: 'Eventos', href: '#eventos' },
    { label: 'Contacto', href: '#contacto' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 40);
  }

  toggleMenu() {
    this.menuOpen.set(!this.menuOpen());
  }
}
