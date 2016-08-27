import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Pacijent } from './pacijent';

@Injectable()
export class PacijentSearchService {
    constructor(private http: Http) { }

    search(term: string): Observable<Pacijent[]> {
        return this.http
            .get(`app/pacijenti/?name=${term}`)
            .map((r: Response) => r.json().data as Pacijent[]);
    }
}
