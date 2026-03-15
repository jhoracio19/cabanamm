import { Component } from '@angular/core';

@Component({
  selector: 'footer-ui',
  standalone: true,
  template: `
    <footer class="bg-[#060402] pt-24 pb-10">
      <!-- Línea dorada superior -->
      <div
        class="h-px bg-[linear-gradient(90deg,transparent_0%,#b8960c_30%,#e8c84a_50%,#b8960c_70%,transparent_100%)]"
      ></div>

      <div class="max-w-7xl mx-auto px-8 pt-16">
        <!-- Logo central -->
        <div class="text-center mb-16">
          <p class="text-[9px] tracking-[0.35em] uppercase text-[#c9a84c]/50 font-light mb-2">
            Tlaxcala, México
          </p>
          <h3
            class="font-serif italic text-[#c9a84c] text-3xl md:text-4xl font-light tracking-wide"
          >
            Cabaña
          </h3>
          <p class="text-[11px] tracking-[0.4em] uppercase text-[#f5efe0]/50 font-light mt-1">
            Maria Maria
          </p>

          <div class="flex items-center justify-center gap-4 mt-6">
            <span
              class="flex-1 max-w-[80px] h-px bg-[linear-gradient(90deg,transparent,rgba(201,168,76,0.35))]"
            ></span>
            <span class="w-[4px] h-[4px] bg-[#c9a84c]/50 rotate-45"></span>
            <span
              class="flex-1 max-w-[80px] h-px bg-[linear-gradient(90deg,rgba(201,168,76,0.35),transparent)]"
            ></span>
          </div>
        </div>

        <!-- Grid contenido -->
        <div class="grid md:grid-cols-3 gap-12 md:gap-16 mb-16">
          <!-- Sobre nosotros -->
          <div>
            <p class="text-[9px] tracking-[0.25em] uppercase text-[#c9a84c]/70 font-light mb-5">
              Sobre nosotros
            </p>
            <p class="text-[#f0e6d2]/45 font-light leading-[1.85] text-sm">
              Un espacio único para celebrar bodas, XV años y eventos especiales rodeados de
              naturaleza, elegancia y calidez en Tlaxcala.
            </p>

            <!-- Redes sociales -->
            <div class="flex gap-5 mt-8">
              <a
                href="#"
                class="w-8 h-8 border border-[#c9a84c]/25 flex items-center justify-center
                        text-[#c9a84c]/60 hover:text-[#c9a84c] hover:border-[#c9a84c]/60
                        transition-colors duration-300"
              >
                <!-- Facebook -->
                <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                  />
                </svg>
              </a>
              <a
                href="#"
                class="w-8 h-8 border border-[#c9a84c]/25 flex items-center justify-center
                        text-[#c9a84c]/60 hover:text-[#c9a84c] hover:border-[#c9a84c]/60
                        transition-colors duration-300"
              >
                <!-- Instagram -->
                <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                  />
                </svg>
              </a>
              <a
                href="https://wa.me/522464637426"
                target="_blank"
                class="w-8 h-8 border border-[#c9a84c]/25 flex items-center justify-center
                        text-[#c9a84c]/60 hover:text-[#c9a84c] hover:border-[#c9a84c]/60
                        transition-colors duration-300"
              >
                <!-- WhatsApp -->
                <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <!-- Enlaces rápidos -->
          <nav>
            <p class="text-[9px] tracking-[0.25em] uppercase text-[#c9a84c]/70 font-light mb-5">
              Enlaces rápidos
            </p>
            <ul class="space-y-4">
              @for (link of navLinks; track link.href) {
                <li>
                  <a
                    [href]="link.href"
                    class="group flex items-center gap-3
                            text-[#f0e6d2]/45 hover:text-[#c9a84c]
                            text-sm font-light tracking-wide
                            transition-colors duration-300"
                  >
                    <span
                      class="w-4 h-px bg-[#c9a84c]/25
                                 group-hover:w-6 group-hover:bg-[#c9a84c]/70
                                 transition-all duration-300"
                    ></span>
                    {{ link.label }}
                  </a>
                </li>
              }
            </ul>
          </nav>

          <!-- Contacto -->
          <div>
            <p class="text-[9px] tracking-[0.25em] uppercase text-[#c9a84c]/70 font-light mb-5">
              Contacto
            </p>
            <ul class="space-y-5">
              @for (item of contactItems; track item.label) {
                <li class="flex items-start gap-4">
                  <div
                    class="w-7 h-7 border border-[#c9a84c]/20 flex items-center justify-center shrink-0 mt-0.5"
                  >
                    <span
                      [innerHTML]="item.icon"
                      class="text-[#c9a84c]/60 flex items-center justify-center"
                    ></span>
                  </div>
                  <div>
                    <p
                      class="text-[8px] tracking-[0.2em] uppercase text-[#c9a84c]/50 font-light mb-0.5"
                    >
                      {{ item.label }}
                    </p>
                    <p class="text-[#f0e6d2]/55 text-sm font-light">{{ item.value }}</p>
                  </div>
                </li>
              }
            </ul>
          </div>
        </div>

        <!-- Divider ornamental -->
        <div class="flex items-center gap-4 mb-8">
          <span class="flex-1 h-px bg-[#c9a84c]/10"></span>
          <span class="w-[4px] h-[4px] bg-[#c9a84c]/30 rotate-45"></span>
          <span class="flex-1 h-px bg-[#c9a84c]/10"></span>
        </div>

        <!-- Copyright -->
        <div class="flex flex-col md:flex-row justify-between items-center gap-3">
          <p class="text-[9px] tracking-[0.2em] uppercase text-[#f0e6d2]/25 font-light">
            © 2026 Cabaña Maria Maria · Todos los derechos reservados
          </p>
          <p class="text-[9px] tracking-[0.2em] uppercase text-[#f0e6d2]/25 font-light">
            Desarrollado por
            <a
              href="https://jhdevagency.com"
              target="_blank"
              class="text-[#c9a84c]/60 hover:text-[#c9a84c] transition-colors duration-300 ml-1"
            >
              JH Dev Agency
            </a>
          </p>
        </div>
      </div>
    </footer>
  `,
})
export class FooterUI {
  navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Galería', href: '#galeria' },
    { label: 'Eventos', href: '#eventos' },
    { label: 'Cotizar evento', href: '#cotizacion' },
  ];

  contactItems = [
    {
      label: 'Teléfono',
      value: '+52 246 463 7426',
      icon: `<svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24">
               <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
             </svg>`,
    },
    {
      label: 'Correo',
      value: 'contacto@cabanamariamaria.com',
      icon: `<svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24">
               <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
             </svg>`,
    },
    {
      label: 'Ubicación',
      value: 'Tlaxcala, México',
      icon: `<svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24">
               <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
             </svg>`,
    },
  ];
}
