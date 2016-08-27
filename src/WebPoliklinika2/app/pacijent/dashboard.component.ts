import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Pacijent } from './pacijent';
import { PacijentService } from './pacijent.service';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    pacijenti: Pacijent[] = [];

    constructor(
        private router: Router,
        private pacijentService: PacijentService) {
    }

    ngOnInit(): void {
        this.pacijentService.getPacijenti()
            .then(pacijenti => this.pacijenti = pacijenti.slice(1, 5));
    }

    gotoDetail(pacijent: Pacijent): void {
        let link = ['/detalj', pacijent.id];
        this.router.navigate(link);
    }
}
