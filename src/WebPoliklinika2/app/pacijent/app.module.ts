import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { XHRBackend } from '@angular/http';

import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
//import { InMemoryDataService } from './in-memory-data.service';

import './rxjs-extensions';
import { AppComponent } from './app.component';
import { routing, routedComponents } from './app.routing';
import { PacijentService } from './pacijent.service';
import { PacijentSearchComponent } from './pacijent-search.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule
    ],
    declarations: [
        AppComponent,
        PacijentSearchComponent,
        routedComponents
    ],
    providers: [
        PacijentService,
        { provide: XHRBackend, useClass: InMemoryBackendService } // in-mem server
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }