System.register(['@angular/core', '@angular/platform-browser', './pacijenti.component'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, pacijenti_component_1;
    var PacijentiModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (pacijenti_component_1_1) {
                pacijenti_component_1 = pacijenti_component_1_1;
            }],
        execute: function() {
            PacijentiModule = (function () {
                function PacijentiModule() {
                }
                PacijentiModule = __decorate([
                    core_1.NgModule({
                        imports: [platform_browser_1.BrowserModule],
                        declarations: [pacijenti_component_1.PacijentiComponent],
                        bootstrap: [pacijenti_component_1.PacijentiComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], PacijentiModule);
                return PacijentiModule;
            }());
            exports_1("PacijentiModule", PacijentiModule);
        }
    }
});
