﻿import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/pacijenti" routerLinkActive="active">Pacijenti</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
    title = 'Lista pacijenata';
}
