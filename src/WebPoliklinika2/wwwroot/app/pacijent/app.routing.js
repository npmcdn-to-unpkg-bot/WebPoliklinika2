System.register(['@angular/router', './dashboard.component', './pacijent.component', './pacijent-detalj.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, dashboard_component_1, pacijent_component_1, pacijent_detalj_component_1;
    var appRoutes, routing, routedComponents;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (pacijent_component_1_1) {
                pacijent_component_1 = pacijent_component_1_1;
            },
            function (pacijent_detalj_component_1_1) {
                pacijent_detalj_component_1 = pacijent_detalj_component_1_1;
            }],
        execute: function() {
            appRoutes = [
                {
                    path: '',
                    redirectTo: '/dashboard',
                    pathMatch: 'full'
                },
                {
                    path: 'dashboard',
                    component: dashboard_component_1.DashboardComponent
                },
                {
                    path: 'detalj/:id',
                    component: pacijent_detalj_component_1.PacijentDetaljComponent
                },
                {
                    path: 'pacijenti',
                    component: pacijent_component_1.PacijentComponent
                }
            ];
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes));
            exports_1("routedComponents", routedComponents = [dashboard_component_1.DashboardComponent, pacijent_component_1.PacijentComponent, pacijent_detalj_component_1.PacijentDetaljComponent]);
        }
    }
});
