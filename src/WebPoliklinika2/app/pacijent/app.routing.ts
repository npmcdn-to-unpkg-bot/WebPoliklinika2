import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { PacijentComponent } from './pacijent.component';
import { PacijentDetaljComponent } from './pacijent-detalj.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'detalj/:id',
        component: PacijentDetaljComponent
    },
    {
        path: 'pacijenti',
        component: PacijentComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);

export const routedComponents = [DashboardComponent, PacijentComponent, PacijentDetaljComponent];