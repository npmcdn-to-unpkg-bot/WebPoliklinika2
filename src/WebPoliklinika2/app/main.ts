// main.ts

/// <reference path="../typings/index.d.ts" />
import { platformBrowserDynamic  }    from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import { PacijentiModule } from './pacijenti/pacijenti.module';

platformBrowserDynamic().bootstrapModule(AppModule);
platformBrowserDynamic().bootstrapModule(PacijentiModule);