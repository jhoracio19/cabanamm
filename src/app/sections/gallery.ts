import { Component, signal } from '@angular/core';

@Component({
  selector: 'gallery-section',
  standalone: true,
  template: `
    <section id="galeria" class="py-32 bg-[#0a0806]">
      <div class="max-w-7xl mx-auto px-8">
        <!-- Header -->
        <header class="text-center mb-20">
          <div
            class="inline-flex items-center gap-3 mb-6 text-[10px] tracking-[0.2em] uppercase text-[#c9a84c] font-light"
          >
            <span class="w-8 h-px bg-[#c9a84c]/70"></span>
            Nuestro espacio
            <span class="w-8 h-px bg-[#c9a84c]/70"></span>
          </div>

          <h2
            class="font-serif font-light text-[#f5efe0] text-4xl md:text-5xl lg:text-6xl tracking-tight"
          >
            Un escenario
            <em class="italic text-[#c9a84c] not-italic"> inolvidable</em>
          </h2>

          <div class="flex items-center justify-center gap-4 mt-8 mb-6">
            <span
              class="flex-1 max-w-[60px] h-px bg-[linear-gradient(90deg,transparent,rgba(201,168,76,0.5))]"
            ></span>
            <span class="w-[5px] h-[5px] bg-[#c9a84c] rotate-45 opacity-80"></span>
            <span
              class="flex-1 max-w-[60px] h-px bg-[linear-gradient(90deg,rgba(201,168,76,0.5),transparent)]"
            ></span>
          </div>

          <p
            class="text-[#f0e6d2]/55 font-light leading-relaxed max-w-xl mx-auto text-sm md:text-base tracking-wide"
          >
            Descubre la belleza natural y la elegancia de Cabaña Maria Maria, escenario perfecto
            para bodas, XV años y eventos especiales.
          </p>
        </header>

        <!-- Grid -->
        <div class="grid grid-cols-2 md:grid-cols-3 grid-rows-[auto] gap-3 md:gap-4">
          <!-- Imagen 0 — grande, ocupa 2 cols y 2 rows -->
          <figure
            class="relative overflow-hidden group cursor-pointer col-span-2 md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto md:min-h-[480px]
                         border border-[#c9a84c]/10 hover:border-[#c9a84c]/35 transition-colors duration-500"
          >
            <img
              [src]="images()[0]"
              loading="lazy"
              alt="Cabaña Maria Maria salón de eventos"
              class="w-full h-full object-cover transition duration-700 ease-out group-hover:scale-105"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-[#0a0806]/70 via-[#0a0806]/10 to-transparent
                        opacity-0 group-hover:opacity-100 transition duration-500"
            ></div>
            <figcaption
              class="absolute bottom-0 left-0 p-6 translate-y-3 opacity-0
                               group-hover:translate-y-0 group-hover:opacity-100
                               transition-all duration-500"
            >
              <span class="text-[9px] tracking-[0.25em] uppercase text-[#c9a84c] font-light"
                >Vista principal</span
              >
            </figcaption>
          </figure>

          <!-- Imágenes 1–4 — cuadradas pequeñas -->
          @for (img of images().slice(1, 5); track img; let i = $index) {
            <figure
              class="relative overflow-hidden group cursor-pointer aspect-square
                           border border-[#c9a84c]/10 hover:border-[#c9a84c]/35 transition-colors duration-500"
            >
              <img
                [src]="img"
                loading="lazy"
                alt="Cabaña Maria Maria"
                class="w-full h-full object-cover transition duration-700 ease-out group-hover:scale-105"
              />
              <div
                class="absolute inset-0 bg-[#0a0806]/50
                          opacity-0 group-hover:opacity-100 transition duration-500"
              ></div>
              <div
                class="absolute inset-0 flex items-center justify-center
                          opacity-0 group-hover:opacity-100 transition duration-500"
              >
                <span
                  class="w-8 h-8 border border-[#c9a84c]/70 rotate-45 flex items-center justify-center"
                >
                  <span class="w-1.5 h-1.5 bg-[#c9a84c] rotate-45"></span>
                </span>
              </div>
            </figure>
          }

          <!-- Imagen 5 — banner horizontal -->
          <figure
            class="relative overflow-hidden group cursor-pointer col-span-2 md:col-span-3 aspect-[21/6]
                         border border-[#c9a84c]/10 hover:border-[#c9a84c]/35 transition-colors duration-500"
          >
            <img
              [src]="images()[5]"
              loading="lazy"
              alt="Cabaña Maria Maria"
              class="w-full h-full object-cover transition duration-700 ease-out group-hover:scale-105"
            />
            <div
              class="absolute inset-0 bg-gradient-to-r from-[#0a0806]/60 via-transparent to-[#0a0806]/40
                        opacity-0 group-hover:opacity-100 transition duration-500"
            ></div>
            <figcaption
              class="absolute left-0 top-1/2 -translate-y-1/2 p-8
                               translate-x-[-8px] opacity-0
                               group-hover:translate-x-0 group-hover:opacity-100
                               transition-all duration-500"
            >
              <span class="text-[9px] tracking-[0.25em] uppercase text-[#c9a84c] font-light"
                >Jardines y salones</span
              >
            </figcaption>
          </figure>
        </div>

        <!-- CTA -->
        <div class="flex justify-center mt-14">
          <a
            href="#cotizacion"
            class="relative overflow-hidden border border-[#c9a84c]/70 text-[#c9a84c]
                    px-10 py-3.5 text-[10px] tracking-[0.22em] uppercase font-light
                    transition-colors duration-300 hover:text-[#e8c84a] hover:border-[#c9a84c]
                    before:content-[''] before:absolute before:inset-0
                    before:bg-[#c9a84c]/10 before:scale-x-0 before:origin-left
                    before:transition-transform before:duration-300 hover:before:scale-x-100"
          >
            Ver galería completa
          </a>
        </div>
      </div>
    </section>
  `,
})
export class GallerySection {
  images = signal([
    'gallery/imagen1.webp',
    'gallery/imagen2.webp',
    'gallery/imagen4.webp',
    'gallery/imagen5.webp',
    'gallery/imagen6.webp',
    'gallery/imagen3.webp',
  ]);
}
