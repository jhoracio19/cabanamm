import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'quote-form-section',
  standalone: true,
  imports: [FormsModule],
  template: `
    <section id="cotizacion" class="py-32 bg-[#0a0806]">
      <div class="max-w-5xl mx-auto px-8">
        <!-- Header -->
        <header class="text-center mb-16">
          <div
            class="inline-flex items-center gap-3 mb-6 text-[10px] tracking-[0.2em] uppercase text-[#c9a84c] font-light"
          >
            <span class="w-8 h-px bg-[#c9a84c]/70"></span>
            Cotización
            <span class="w-8 h-px bg-[#c9a84c]/70"></span>
          </div>

          <h2
            class="font-serif font-light text-[#f5efe0] text-4xl md:text-5xl lg:text-6xl tracking-tight"
          >
            Planea tu
            <em class="italic text-[#c9a84c]"> evento ideal</em>
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
            Cuéntanos sobre tu evento y te enviaremos disponibilidad y detalles para hacerlo
            inolvidable.
          </p>
        </header>

        <!-- Card del form -->
        <div class="border border-[#c9a84c]/15 bg-[#0d0a07]">
          <!-- Línea dorada superior -->
          <div
            class="h-px bg-[linear-gradient(90deg,transparent_0%,#b8960c_30%,#e8c84a_50%,#b8960c_70%,transparent_100%)]"
          ></div>

          <form
            class="p-10 md:p-14 grid md:grid-cols-2 gap-x-10 gap-y-8"
            (submit)="sendToWhatsApp($event)"
          >
            <!-- Nombre -->
            <div class="flex flex-col gap-2">
              <label class="text-[9px] tracking-[0.25em] uppercase text-[#c9a84c]/80 font-light">
                Nombre completo <span class="text-[#c9a84c]">*</span>
              </label>
              <input
                type="text"
                required
                [(ngModel)]="name"
                name="name"
                class="bg-transparent border-b border-[#c9a84c]/20 py-3
                       text-[#f5efe0] font-light text-sm tracking-wide
                       placeholder:text-[#f0e6d2]/20
                       focus:outline-none focus:border-[#c9a84c]/70
                       transition-colors duration-300"
                placeholder="Tu nombre"
              />
            </div>

            <!-- Teléfono -->
            <div class="flex flex-col gap-2">
              <label class="text-[9px] tracking-[0.25em] uppercase text-[#c9a84c]/80 font-light">
                Teléfono <span class="text-[#c9a84c]">*</span>
              </label>
              <input
                type="tel"
                required
                [(ngModel)]="phone"
                name="phone"
                class="bg-transparent border-b border-[#c9a84c]/20 py-3
                       text-[#f5efe0] font-light text-sm tracking-wide
                       placeholder:text-[#f0e6d2]/20
                       focus:outline-none focus:border-[#c9a84c]/70
                       transition-colors duration-300"
                placeholder="55 1234 5678"
              />
            </div>

            <!-- Tipo de evento -->
            <div class="flex flex-col gap-2">
              <label class="text-[9px] tracking-[0.25em] uppercase text-[#c9a84c]/80 font-light">
                Tipo de evento
              </label>
              <select
                [(ngModel)]="eventType"
                name="eventType"
                class="bg-[#0d0a07] border-b border-[#c9a84c]/20 py-3
                       text-[#f5efe0] font-light text-sm tracking-wide
                       focus:outline-none focus:border-[#c9a84c]/70
                       transition-colors duration-300 cursor-pointer
                       appearance-none"
              >
                <option class="bg-[#0d0a07]">Boda</option>
                <option class="bg-[#0d0a07]">XV Años</option>
                <option class="bg-[#0d0a07]">Evento Corporativo</option>
                <option class="bg-[#0d0a07]">Otro</option>
              </select>
            </div>

            <!-- Fecha -->
            <div class="flex flex-col gap-2">
              <label class="text-[9px] tracking-[0.25em] uppercase text-[#c9a84c]/80 font-light">
                Fecha del evento
              </label>
              <input
                type="date"
                [(ngModel)]="date"
                name="date"
                class="bg-transparent border-b border-[#c9a84c]/20 py-3
                       text-[#f5efe0] font-light text-sm tracking-wide
                       focus:outline-none focus:border-[#c9a84c]/70
                       transition-colors duration-300
                       [color-scheme:dark]"
              />
            </div>

            <!-- Invitados — full width -->
            <div class="flex flex-col gap-2 md:col-span-2">
              <label class="text-[9px] tracking-[0.25em] uppercase text-[#c9a84c]/80 font-light">
                Número de invitados
              </label>
              <input
                type="number"
                min="1"
                [(ngModel)]="guests"
                name="guests"
                class="bg-transparent border-b border-[#c9a84c]/20 py-3
                       text-[#f5efe0] font-light text-sm tracking-wide
                       placeholder:text-[#f0e6d2]/20
                       focus:outline-none focus:border-[#c9a84c]/70
                       transition-colors duration-300"
                placeholder="Ej. 150"
              />
            </div>

            <!-- Separador ornamental -->
            <div class="md:col-span-2 flex items-center gap-4 my-2">
              <span class="flex-1 h-px bg-[#c9a84c]/10"></span>
              <span class="w-[4px] h-[4px] bg-[#c9a84c]/30 rotate-45"></span>
              <span class="flex-1 h-px bg-[#c9a84c]/10"></span>
            </div>

            <!-- Botón submit -->
            <div class="md:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-6">
              <p class="text-[9px] tracking-[0.18em] uppercase text-[#f0e6d2]/30 font-light">
                Te responderemos en menos de 24 horas
              </p>

              <button
                type="submit"
                class="relative overflow-hidden group
                       border border-[#c9a84c]/70 text-[#c9a84c]
                       px-12 py-4 text-[10px] tracking-[0.22em] uppercase font-light
                       transition-colors duration-300 hover:text-[#0a0806]
                       before:content-[''] before:absolute before:inset-0
                       before:bg-[#c9a84c] before:scale-x-0 before:origin-left
                       before:transition-transform before:duration-400 hover:before:scale-x-100
                       whitespace-nowrap"
              >
                <span class="relative z-10 flex items-center gap-3">
                  Enviar por WhatsApp
                  <svg class="w-4 h-4 relative z-10" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </form>

          <!-- Línea dorada inferior -->
          <div
            class="h-px bg-[linear-gradient(90deg,transparent_0%,#b8960c_30%,#e8c84a_50%,#b8960c_70%,transparent_100%)]"
          ></div>
        </div>
      </div>
    </section>
  `,
})
export class QuoteFormSection {
  name = '';
  phone = '';
  eventType = 'Boda';
  date = '';
  guests: number | null = null; // ← number, no string

  sanitize(value: unknown): string {
    if (value === null || value === undefined) return '';
    return String(value).trim().replace(/[<>]/g, '').replace(/\s+/g, ' ');
  }

  sanitizePhone(phone: string): string {
    return phone.replace(/\D/g, '');
  }

  sendToWhatsApp(event: Event) {
    event.preventDefault();

    const name = this.sanitize(this.name);
    const phone = this.sanitizePhone(this.sanitize(this.phone));
    const eventType = this.sanitize(this.eventType);
    const date = this.sanitize(this.date);
    const guests = this.guests != null && this.guests > 0 ? String(this.guests) : 'No especificado';

    if (!name || !phone) {
      alert('Por favor completa los campos requeridos.');
      return;
    }

    const message = [
      'Hola, me gustaría solicitar información sobre un evento.',
      '',
      `Nombre: ${name}`,
      `Teléfono: ${phone}`,
      `Tipo de evento: ${eventType}`,
      `Fecha del evento: ${date || 'No especificada'}`,
      `Invitados: ${guests}`,
    ].join('\n');

    window.open(`https://wa.me/522462132732?text=${encodeURIComponent(message)}`, '_blank');
  }
}
