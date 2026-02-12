import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import {
  heroArrowUpCircle,
  heroCodeBracket,
  heroGlobeAlt,
  heroMoon,
  heroServer,
  heroSun,
  heroEnvelope,
  heroDevicePhoneMobile,
} from '@ng-icons/heroicons/outline';
import { provideStore } from '@ngxs/store';
import { ProjectsState } from './state/projects/projects.state';


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideStore([ProjectsState]),
    provideIcons({
      heroCodeBracket,
      heroSun,
      heroMoon,
      heroArrowUpCircle,
      heroServer,
      heroGlobeAlt,
      heroEnvelope,
      heroDevicePhoneMobile
    }),
  ]
};
