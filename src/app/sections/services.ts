import { Component, signal } from '@angular/core';

type EventService = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tag: string;
};

@Component({
  selector: 'services-section',
  standalone: true,
  template: `
    <section id="eventos" class="py-32 bg-[#0d0a07]">
      <div class="max-w-7xl mx-auto px-8">
        <!-- Header -->
        <header class="text-center mb-20">
          <div
            class="inline-flex items-center gap-3 mb-6 text-[10px] tracking-[0.2em] uppercase text-[#c9a84c] font-light"
          >
            <span class="w-8 h-px bg-[#c9a84c]/70"></span>
            Lo que celebramos
            <span class="w-8 h-px bg-[#c9a84c]/70"></span>
          </div>

          <h2
            class="font-serif font-light text-[#f5efe0] text-4xl md:text-5xl lg:text-6xl tracking-tight"
          >
            Eventos que
            <em class="italic text-[#c9a84c]"> perduran</em>
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
            En Cabaña Maria Maria ofrecemos el espacio ideal para celebrar momentos especiales en un
            ambiente elegante y rodeado de naturaleza.
          </p>
        </header>

        <!-- Cards -->
        <div class="grid md:grid-cols-3 gap-6">
          @for (event of events(); track event.title; let i = $index) {
            <article
              class="group relative flex flex-col overflow-hidden
                            border border-[#c9a84c]/12 hover:border-[#c9a84c]/40
                            bg-[#0a0806] transition-colors duration-500 cursor-pointer"
            >
              <!-- Número índice -->
              <div
                class="absolute top-5 left-5 z-10
                          font-serif italic text-[#c9a84c]/25 text-5xl font-light leading-none
                          group-hover:text-[#c9a84c]/40 transition-colors duration-500 select-none"
              >
                {{ (i + 1).toString().padStart(2, '0') }}
              </div>

              <!-- Imagen -->
              <div class="overflow-hidden aspect-[4/3]">
                <img
                  [src]="event.image"
                  loading="lazy"
                  [alt]="event.title + ' en Cabaña Maria Maria'"
                  class="w-full h-full object-cover transition duration-700 ease-out
                            group-hover:scale-105 brightness-75 group-hover:brightness-90"
                />
              </div>

              <!-- Tag flotante -->
              <div class="absolute top-5 right-5 z-10">
                <span
                  class="text-[8px] tracking-[0.25em] uppercase text-[#c9a84c]
                             border border-[#c9a84c]/50 px-2.5 py-1 font-light
                             bg-[#0a0806]/60 backdrop-blur-sm"
                >
                  {{ event.tag }}
                </span>
              </div>

              <!-- Contenido -->
              <div class="flex flex-col flex-1 p-7 pt-6">
                <!-- Separador -->
                <div
                  class="w-8 h-px bg-[#c9a84c]/50 mb-5
                            group-hover:w-14 transition-all duration-500"
                ></div>

                <h3
                  class="font-serif font-light text-[#f5efe0] text-2xl md:text-3xl tracking-tight mb-1"
                >
                  {{ event.title }}
                </h3>
                <p class="text-[10px] tracking-[0.2em] uppercase text-[#c9a84c]/70 font-light mb-4">
                  {{ event.subtitle }}
                </p>
                <p class="text-[#f0e6d2]/50 text-sm font-light leading-relaxed flex-1">
                  {{ event.description }}
                </p>

                <!-- CTA -->
                <a
                  href="#cotizacion"
                  class="relative overflow-hidden mt-8 self-start
                          border border-[#c9a84c]/60 text-[#c9a84c]
                          px-7 py-2.5 text-[9px] tracking-[0.22em] uppercase font-light
                          transition-colors duration-300 hover:text-[#e8c84a] hover:border-[#c9a84c]
                          before:content-[''] before:absolute before:inset-0
                          before:bg-[#c9a84c]/10 before:scale-x-0 before:origin-left
                          before:transition-transform before:duration-300 hover:before:scale-x-100"
                >
                  Solicitar información
                </a>
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class ServicesSection {
  events = signal<EventService[]>([
    {
      title: 'Bodas',
      subtitle: 'Ceremonia & Recepción',
      description:
        'Celebra el día más importante de tu vida en un entorno natural lleno de elegancia y romanticismo. Cada detalle pensado para ti.',
      image: 'assets/images/boda.webp',
      tag: 'Bodas',
    },
    {
      title: 'XV Años',
      subtitle: 'Fiesta de quinceañera',
      description:
        'Un lugar mágico para celebrar una fiesta inolvidable rodeada de naturaleza, luz y estilo. Tu momento más especial merece el mejor escenario.',
      image: 'assets/images/xv.webp',
      tag: 'Quinceañera',
    },
    {
      title: 'Corporativos',
      subtitle: 'Reuniones & Convivencias',
      description:
        'El espacio ideal para reuniones, convivencias y celebraciones empresariales en un ambiente diferente, elegante y memorable.',
      image: 'assets/images/corporativo.webp',
      tag: 'Empresarial',
    },
  ]);
}
