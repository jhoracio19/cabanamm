import { Component, signal } from '@angular/core';

type Testimonial = {
  name: string;
  initials: string;
  text: string;
  event: string;
};

@Component({
  selector: 'testimonials-section',
  standalone: true,
  template: `
    <section class="py-32 bg-[#080604]">
      <div class="max-w-7xl mx-auto px-8">
        <!-- Header -->
        <header class="text-center mb-20">
          <div
            class="inline-flex items-center gap-3 mb-6 text-[10px] tracking-[0.2em] uppercase text-[#c9a84c] font-light"
          >
            <span class="w-8 h-px bg-[#c9a84c]/70"></span>
            Testimonios
            <span class="w-8 h-px bg-[#c9a84c]/70"></span>
          </div>

          <h2
            class="font-serif font-light text-[#f5efe0] text-4xl md:text-5xl lg:text-6xl tracking-tight"
          >
            Palabras que
            <em class="italic text-[#c9a84c]"> nos inspiran</em>
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
            Muchas familias han celebrado momentos inolvidables en Cabaña Maria Maria.
          </p>
        </header>

        <!-- Grid -->
        <div class="grid md:grid-cols-3 gap-6">
          @for (t of testimonials(); track t.name; let i = $index) {
            <article
              class="group relative flex flex-col
                            border border-[#c9a84c]/12 hover:border-[#c9a84c]/35
                            bg-[#0d0a07] p-8 transition-colors duration-500"
            >
              <!-- Comilla decorativa -->
              <div
                class="font-serif text-[7rem] leading-none text-[#c9a84c]/8
                          group-hover:text-[#c9a84c]/15 transition-colors duration-500
                          absolute top-2 right-6 select-none pointer-events-none"
              >
                "
              </div>

              <!-- Tag evento -->
              <div class="mb-6">
                <span
                  class="text-[8px] tracking-[0.25em] uppercase text-[#c9a84c]
                             border border-[#c9a84c]/40 px-2.5 py-1 font-light"
                >
                  {{ t.event }}
                </span>
              </div>

              <!-- Separador -->
              <div
                class="w-8 h-px bg-[#c9a84c]/40 mb-6
                          group-hover:w-14 transition-all duration-500"
              ></div>

              <!-- Texto -->
              <p class="text-[#f0e6d2]/60 font-light leading-[1.8] text-sm flex-1 italic">
                "{{ t.text }}"
              </p>

              <!-- Autor -->
              <div class="flex items-center gap-4 mt-8 pt-6 border-t border-[#c9a84c]/10">
                <div
                  class="w-10 h-10 border border-[#c9a84c]/40 flex items-center justify-center
                            bg-[#c9a84c]/8 shrink-0"
                >
                  <span class="font-serif italic text-[#c9a84c] text-sm">{{ t.initials }}</span>
                </div>
                <div>
                  <p class="text-[#f5efe0] text-sm font-light tracking-wide">{{ t.name }}</p>
                  <p
                    class="text-[9px] tracking-[0.18em] uppercase text-[#c9a84c]/50 font-light mt-0.5"
                  >
                    Cliente satisfecha
                  </p>
                </div>
              </div>
            </article>
          }
        </div>

        <!-- Frase cierre -->
        <div class="mt-20 text-center">
          <p
            class="font-serif italic text-[#c9a84c]/50 text-xl md:text-2xl font-light tracking-wide"
          >
            "Tu celebración merece el mejor escenario."
          </p>
          <div class="flex items-center justify-center gap-4 mt-5">
            <span
              class="flex-1 max-w-[80px] h-px bg-[linear-gradient(90deg,transparent,rgba(201,168,76,0.3))]"
            ></span>
            <span class="w-[4px] h-[4px] bg-[#c9a84c]/50 rotate-45"></span>
            <span
              class="flex-1 max-w-[80px] h-px bg-[linear-gradient(90deg,rgba(201,168,76,0.3),transparent)]"
            ></span>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class TestimonialsSection {
  testimonials = signal<Testimonial[]>([
    {
      name: 'María López',
      initials: 'ML',
      text: 'Celebramos los XV años de mi hija y todo fue perfecto. El lugar es hermoso y muy acogedor.',
      event: 'XV Años',
    },
    {
      name: 'Carlos Ramírez',
      initials: 'CR',
      text: 'Nuestra boda fue increíble. La cabaña tiene un ambiente único rodeado de naturaleza.',
      event: 'Boda',
    },
    {
      name: 'Laura Hernández',
      initials: 'LH',
      text: 'Realizamos un evento empresarial y todo salió excelente. Muy recomendado.',
      event: 'Evento Corporativo',
    },
  ]);
}
