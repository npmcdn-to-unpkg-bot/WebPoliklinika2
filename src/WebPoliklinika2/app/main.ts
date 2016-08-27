import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { PacijentModule } from './pacijent/pacijent.module';

platformBrowserDynamic().bootstrapModule(PacijentModule)
    .then(success => console.log(`Bootstrap success`))
    .catch(error => console.log(error));
