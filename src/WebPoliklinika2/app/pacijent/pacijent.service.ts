/// <reference path="../../typings/index.d.ts" />
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Pacijent } from './pacijent';

@Injectable()
export class PacijentService {
    private pacijentiUrl = 'api/Pacijent/';  // URL to web api

    constructor(private http: Http) { }

    getPacijenti(): Promise<Pacijent[]> {
        return this.http
            .get(this.pacijentiUrl+'GetPacijent')
            .toPromise()
            .then(response => response.json().data as Pacijent[])
            .catch(this.handleError);
    }

    getPacijent(id: number): Promise<Pacijent> {
        return this.getPacijenti()
            .then(heroes => heroes.find(hero => hero.id === id));
    }

    save(pacijent: Pacijent): Promise<Pacijent> {
        if (pacijent.id) {
            return this.put(pacijent);
        }
        return this.post(pacijent);
    }

    delete(pacijent: Pacijent): Promise<Response> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.pacijentiUrl}/${pacijent.id}`;

        return this.http
            .delete(url, { headers: headers })
            .toPromise()
            .catch(this.handleError);
    }

    // Add new Hero
    private post(pacijent: Pacijent): Promise<Pacijent> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http
            .post(this.pacijentiUrl, JSON.stringify(pacijent), { headers: headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    // Update existing Hero
    private put(pacijent: Pacijent): Promise<Pacijent> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.pacijentiUrl}/${pacijent.id}`;

        return this.http
            .put(url, JSON.stringify(pacijent), { headers: headers })
            .toPromise()
            .then(() => pacijent)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
