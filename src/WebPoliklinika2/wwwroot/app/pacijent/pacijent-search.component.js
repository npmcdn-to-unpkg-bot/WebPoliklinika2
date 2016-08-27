System.register(['@angular/core', '@angular/router', 'rxjs/Observable', 'rxjs/Subject', './pacijent-search.service'], function(exports_1, context_1) {
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
    var core_1, router_1, Observable_1, Subject_1, pacijent_search_service_1;
    var PacijentSearchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            },
            function (pacijent_search_service_1_1) {
                pacijent_search_service_1 = pacijent_search_service_1_1;
            }],
        execute: function() {
            PacijentSearchComponent = (function () {
                function PacijentSearchComponent(pacijentSearchService, router) {
                    this.pacijentSearchService = pacijentSearchService;
                    this.router = router;
                    this.searchTerms = new Subject_1.Subject();
                }
                PacijentSearchComponent.prototype.search = function (term) {
                    // Push a search term into the observable stream.
                    this.searchTerms.next(term);
                };
                PacijentSearchComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.pacijenti = this.searchTerms
                        .debounceTime(300) // wait for 300ms pause in events
                        .distinctUntilChanged() // ignore if next search term is same as previous
                        .switchMap(function (term) { return term // switch to new observable each time
                        ? _this.pacijentSearchService.search(term)
                        : Observable_1.Observable.of([]); })
                        .catch(function (error) {
                        // TODO: real error handling
                        console.log(error);
                        return Observable_1.Observable.of([]);
                    });
                };
                PacijentSearchComponent.prototype.gotoDetail = function (pacijent) {
                    var link = ['/detalj', pacijent.id];
                    this.router.navigate(link);
                };
                PacijentSearchComponent = __decorate([
                    core_1.Component({
                        moduleId: module.id,
                        selector: 'pacijent-search',
                        templateUrl: 'pacijent-search.component.html',
                        styleUrls: ['pacijent-search.component.css'],
                        providers: [pacijent_search_service_1.PacijentSearchService]
                    }), 
                    __metadata('design:paramtypes', [pacijent_search_service_1.PacijentSearchService, router_1.Router])
                ], PacijentSearchComponent);
                return PacijentSearchComponent;
            }());
            exports_1("PacijentSearchComponent", PacijentSearchComponent);
        }
    }
});
