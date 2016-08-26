// main.ts
System.register(['@angular/platform-browser-dynamic', './app.component', './pacijenti.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, app_component_1, pacijenti_component_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (pacijenti_component_1_1) {
                pacijenti_component_1 = pacijenti_component_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent);
            platform_browser_dynamic_1.bootstrap(pacijenti_component_1.PacijentiComponent);
        }
    }
});
//# sourceMappingURL=main.js.map