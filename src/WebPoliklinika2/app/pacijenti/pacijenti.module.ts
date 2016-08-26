import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PacijentiComponent }  from './pacijenti.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [PacijentiComponent],
    bootstrap: [PacijentiComponent]
})
export class PacijentiModule { }