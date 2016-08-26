// main.ts
System.register(['@angular/platform-browser-dynamic', './app.module', './pacijenti/pacijenti.module'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, app_module_1, pacijenti_module_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_module_1_1) {
                app_module_1 = app_module_1_1;
            },
            function (pacijenti_module_1_1) {
                pacijenti_module_1 = pacijenti_module_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(pacijenti_module_1.PacijentiModule);
        }
    }
});
