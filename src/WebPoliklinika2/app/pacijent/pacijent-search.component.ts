import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { PacijentSearchService } from './pacijent-search.service';
import { Pacijent } from './pacijent';

@Component({
    moduleId: module.id,
    selector: 'pacijent-search',
    templateUrl: 'pacijent-search.component.html',
    styleUrls: ['pacijent-search.component.css'],
    providers: [PacijentSearchService]
})
export class PacijentSearchComponent implements OnInit {
    pacijenti: Observable<Pacijent[]>;
    private searchTerms = new Subject<string>();

    constructor(
        private pacijentSearchService: PacijentSearchService,
        private router: Router) { }

    search(term: string): void {
        // Push a search term into the observable stream.
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.pacijenti = this.searchTerms
            .debounceTime(300)        // wait for 300ms pause in events
            .distinctUntilChanged()   // ignore if next search term is same as previous
            .switchMap(term => term   // switch to new observable each time
                // return the http search observable
                ? this.pacijentSearchService.search(term)
                // or the observable of empty patients if no search term
                : Observable.of<Pacijent[]>([]))
            .catch(error => {
                // TODO: real error handling
                console.log(error);
                return Observable.of<Pacijent[]>([]);
            });
    }

    gotoDetail(pacijent: Pacijent): void {
        let link = ['/detalj', pacijent.id];
        this.router.navigate(link);
    }
}
