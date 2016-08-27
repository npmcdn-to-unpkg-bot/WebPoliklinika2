import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Pacijent } from './pacijent';
import { PacijentService } from './pacijent.service';

@Component({
    moduleId: module.id,
    selector: 'my-patient-detail',
    templateUrl: 'pacijent-detalj.component.html',
    styleUrls: ['pacijent-detalj.component.css']
})
export class PacijentDetaljComponent implements OnInit {
    @Input() pacijent: Pacijent;
    @Output() close = new EventEmitter();
    error: any;
    navigated = false; // true if navigated here

    constructor(
        private pacijentService: PacijentService,
        private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            if (params['id'] !== undefined) {
                let id = +params['id'];
                this.navigated = true;
                this.pacijentService.getPacijent(id)
                    .then(pacijent => this.pacijent = pacijent);
            } else {
                this.navigated = false;
                this.pacijent = new Pacijent();
            }
        });
    }

    save(): void {
        this.pacijentService
            .save(this.pacijent)
            .then(pacijent => {
                this.pacijent = pacijent; // saved pacijent, w/ id if new
                this.goBack(pacijent);
            })
            .catch(error => this.error = error); // TODO: Display error message
    }

    goBack(savedPacijent: Pacijent = null): void {
        this.close.emit(savedPacijent);
        if (this.navigated) { window.history.back(); }
    }
}
