System.register(['@angular/core', '@angular/http', 'rxjs/add/operator/toPromise'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var PacijentService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            PacijentService = (function () {
                function PacijentService(http) {
                    this.http = http;
                    this.pacijentiUrl = 'api/Pacijent/'; // URL to web api
                }
                PacijentService.prototype.getPacijenti = function () {
                    return this.http
                        .get(this.pacijentiUrl + 'GetPacijent')
                        .toPromise()
                        .then(function (response) { return response.json().data; })
                        .catch(this.handleError);
                };
                PacijentService.prototype.getPacijent = function (id) {
                    return this.getPacijenti()
                        .then(function (heroes) { return heroes.find(function (hero) { return hero.id === id; }); });
                };
                PacijentService.prototype.save = function (pacijent) {
                    if (pacijent.id) {
                        return this.put(pacijent);
                    }
                    return this.post(pacijent);
                };
                PacijentService.prototype.delete = function (pacijent) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    var url = this.pacijentiUrl + "/" + pacijent.id;
                    return this.http
                        .delete(url, { headers: headers })
                        .toPromise()
                        .catch(this.handleError);
                };
                // Add new Hero
                PacijentService.prototype.post = function (pacijent) {
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/json'
                    });
                    return this.http
                        .post(this.pacijentiUrl, JSON.stringify(pacijent), { headers: headers })
                        .toPromise()
                        .then(function (res) { return res.json().data; })
                        .catch(this.handleError);
                };
                // Update existing Hero
                PacijentService.prototype.put = function (pacijent) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    var url = this.pacijentiUrl + "/" + pacijent.id;
                    return this.http
                        .put(url, JSON.stringify(pacijent), { headers: headers })
                        .toPromise()
                        .then(function () { return pacijent; })
                        .catch(this.handleError);
                };
                PacijentService.prototype.handleError = function (error) {
                    console.error('An error occurred', error);
                    return Promise.reject(error.message || error);
                };
                PacijentService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], PacijentService);
                return PacijentService;
            }());
            exports_1("PacijentService", PacijentService);
        }
    }
});
