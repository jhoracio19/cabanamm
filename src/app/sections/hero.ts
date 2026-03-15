import { Component } from '@angular/core';

@Component({
  selector: 'hero-section',
  standalone: true,
  template: `
    <section
      class="relative h-[92vh] min-h-[560px] flex items-center justify-center overflow-hidden bg-[#0a0806]"
    >
      <!-- Fondo texturizado -->
      <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_40%,rgba(180,140,60,0.12),transparent_70%),radial-gradient(ellipse_60%_80%_at_20%_70%,rgba(100,60,20,0.18),transparent_65%),linear-gradient(160deg,#0f0c08_0%,#1a1208_35%,#0d0a06_70%,#080604_100%)]"
      ></div>

      <!-- Imagen de fondo -->
      <img
        src="img/hero.webp"
        class="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity contrast-110 saturate-50"
        alt="Cabaña Maria Maria salón de eventos"
      />

      <!-- Overlay gradiente -->
      <div
        class="absolute inset-0 bg-gradient-to-b from-[#08060499]/[.55] via-[#08060426]/[.15] to-[#080604aa]/[.65]"
      ></div>

      <!-- Línea dorada superior -->
      <div
        class="absolute top-0 left-0 right-0 h-[3px] bg-[linear-gradient(90deg,transparent_0%,#b8960c_30%,#e8c84a_50%,#b8960c_70%,transparent_100%)]"
      ></div>

      <!-- Línea dorada inferior -->
      <div
        class="absolute bottom-0 left-0 right-0 h-[2px] bg-[linear-gradient(90deg,transparent_0%,#b8960c_30%,#e8c84a_50%,#b8960c_70%,transparent_100%)]"
      ></div>

      <!-- Label lateral izquierdo -->
      <span
        class="absolute left-10 bottom-1/2 translate-y-1/2 -rotate-90 origin-left text-[9px] tracking-[0.28em] uppercase text-[#c9a84c]/45 whitespace-nowrap font-light"
      >
        Salón de eventos · Tlaxcala
      </span>

      <!-- Label lateral derecho -->
      <span
        class="absolute right-10 bottom-1/2 translate-y-1/2 rotate-90 origin-right font-serif text-[11px] tracking-[0.2em] text-[#c9a84c]/35 whitespace-nowrap"
      >
        Est. Tlaxcala
      </span>

      <!-- Contenido principal -->
      <div class="relative z-10 text-center max-w-3xl px-8 animate-[fadeUp_1.2s_ease_both]">
        <!-- Badge -->
        <div
          class="inline-flex items-center gap-3 mb-9 text-[10px] tracking-[0.2em] uppercase text-[#c9a84c] font-light"
        >
          <span class="w-8 h-px bg-[#c9a84c]/70"></span>
          Salón de eventos en Tlaxcala
          <span class="w-8 h-px bg-[#c9a84c]/70"></span>
        </div>

        <!-- Título -->
        <h1
          class="font-serif font-light leading-[1.05] text-[#f5efe0] tracking-tight
                 text-5xl md:text-7xl lg:text-[5.5rem]"
        >
          Celebra momentos
          <em class="block not-italic italic text-[#c9a84c] text-[1.15em] leading-none mt-1">
            inolvidables
          </em>
        </h1>

        <!-- Separador ornamental -->
        <div class="flex items-center justify-center gap-4 my-8">
          <span
            class="flex-1 max-w-[80px] h-px bg-[linear-gradient(90deg,transparent,rgba(201,168,76,0.6))]"
          ></span>
          <span class="w-[6px] h-[6px] bg-[#c9a84c] rotate-45 opacity-90"></span>
          <span
            class="flex-1 max-w-[80px] h-px bg-[linear-gradient(90deg,rgba(201,168,76,0.6),transparent)]"
          ></span>
        </div>

        <!-- Descripción -->
        <p
          class="text-[#f0e6d2]/75 font-light leading-[1.75] tracking-wide max-w-md mx-auto mb-11
                 text-sm md:text-base"
        >
          Bodas, XV años y eventos especiales en un espacio rodeado de naturaleza, elegancia y
          calidez.
        </p>

        <!-- Botones -->
        <div class="flex flex-wrap justify-center gap-4">
          <!-- Cotizar → scroll a #cotizacion -->
          <button
            (click)="scrollTo('#cotizacion')"
            class="group relative overflow-hidden border border-[#c9a84c]/80 text-[#c9a84c]
                   px-10 py-4 text-[0.78rem] font-light tracking-[0.18em] uppercase
                   transition-colors duration-300 hover:text-[#e8c84a] hover:border-[#c9a84c]
                   before:content-[''] before:absolute before:inset-0
                   before:bg-[#c9a84c]/10 before:scale-x-0 before:origin-left
                   before:transition-transform before:duration-300 hover:before:scale-x-100"
          >
            Cotizar mi evento
          </button>

          <!-- Galería → scroll a #galeria -->
          <button
            (click)="scrollTo('#galeria')"
            class="border border-[#f0e6d2]/25 text-[#f0e6d2]/70
                   px-10 py-4 text-[0.78rem] font-light tracking-[0.18em] uppercase
                   transition-colors duration-300
                   hover:border-[#f0e6d2]/55 hover:text-[#f0e6d2]"
          >
            Ver galería
          </button>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div
        class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2
               text-[9px] tracking-[0.22em] uppercase text-[#c9a84c]/60 font-light cursor-pointer"
        (click)="scrollTo('#galeria')"
      >
        <div class="w-px h-10 bg-[#c9a84c]/30 relative overflow-hidden">
          <div
            class="absolute w-px h-2.5 bg-[#c9a84c] animate-[scrollDot_2s_ease-in-out_infinite]"
          ></div>
        </div>
        Scroll
      </div>
    </section>
  `,
  styles: [
    `
      @keyframes fadeUp {
        from {
          opacity: 0;
          transform: translateY(28px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      @keyframes scrollDot {
        0% {
          top: -10px;
          opacity: 0;
        }
        30% {
          opacity: 1;
        }
        100% {
          top: 48px;
          opacity: 0;
        }
      }
    `,
  ],
})
export class HeroSection {
  scrollTo(selector: string): void {
    const el = document.querySelector(selector);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
