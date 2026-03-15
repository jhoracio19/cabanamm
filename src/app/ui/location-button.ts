import { Component } from '@angular/core';

@Component({
  selector: 'location-button',
  standalone: true,
  template: `
    <div class="fixed bottom-8 right-[5.5rem] z-50 group flex items-center">
      <!-- Tooltip -->
      <span
        class="absolute right-[72px] whitespace-nowrap
                   border border-[#c9a84c]/30 bg-[#0d0a07]/95 backdrop-blur-sm
                   text-[#f0e6d2]/80 text-[9px] tracking-[0.2em] uppercase font-light
                   px-4 py-2
                   opacity-0 translate-x-2 pointer-events-none
                   group-hover:opacity-100 group-hover:translate-x-0
                   transition-all duration-300"
      >
        Cómo llegar
      </span>

      <!-- Botón -->
      <a
        href="https://maps.app.goo.gl/aAFJch8RhSZS2E1b6"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Cómo llegar a Cabaña Maria Maria"
        class="relative flex items-center justify-center w-14 h-14
                border border-[#c9a84c]/50 bg-[#0d0a07]
                text-[#c9a84c]
                hover:bg-[#c9a84c] hover:text-[#0a0806] hover:border-[#c9a84c]
                transition-colors duration-300"
      >
        <!-- Pulso -->
        <span
          class="absolute inset-0 border border-[#c9a84c]/30
                     animate-[locPulse_3s_ease-out_infinite]
                     pointer-events-none"
        ></span>

        <!-- Ícono pin de ubicación -->
        <svg class="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
          <path
            d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
          />
        </svg>
      </a>
    </div>
  `,
  styles: [
    `
      @keyframes locPulse {
        0% {
          transform: scale(1);
          opacity: 0.4;
        }
        70% {
          transform: scale(1.6);
          opacity: 0;
        }
        100% {
          transform: scale(1.6);
          opacity: 0;
        }
      }
    `,
  ],
})
export class LocationButton {}
