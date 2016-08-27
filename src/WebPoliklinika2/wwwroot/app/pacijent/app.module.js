System.register(['@angular/core', '@angular/platform-browser', '@angular/forms', '@angular/http', 'angular2-in-memory-web-api', './rxjs-extensions', './app.component', './app.routing', './pacijent.service', './pacijent-search.component'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, forms_1, http_1, http_2, angular2_in_memory_web_api_1, app_component_1, app_routing_1, pacijent_service_1, pacijent_search_component_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (angular2_in_memory_web_api_1_1) {
                angular2_in_memory_web_api_1 = angular2_in_memory_web_api_1_1;
            },
            function (_1) {},
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (app_routing_1_1) {
                app_routing_1 = app_routing_1_1;
            },
            function (pacijent_service_1_1) {
                pacijent_service_1 = pacijent_service_1_1;
            },
            function (pacijent_search_component_1_1) {
                pacijent_search_component_1 = pacijent_search_component_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            platform_browser_1.BrowserModule,
                            forms_1.FormsModule,
                            app_routing_1.routing,
                            http_1.HttpModule
                        ],
                        declarations: [
                            app_component_1.AppComponent,
                            pacijent_search_component_1.PacijentSearchComponent,
                            app_routing_1.routedComponents
                        ],
                        providers: [
                            pacijent_service_1.PacijentService,
                            { provide: http_2.XHRBackend, useClass: angular2_in_memory_web_api_1.InMemoryBackendService } // in-mem server
                        ],
                        bootstrap: [app_component_1.AppComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});
