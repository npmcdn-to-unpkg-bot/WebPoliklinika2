import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PacijentComponent }  from './pacijent.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [PacijentComponent],
    bootstrap: [PacijentComponent]
})
export class PacijentModule { }