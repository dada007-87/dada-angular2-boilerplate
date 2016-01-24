System.register([ "angular2/core" ], function(exports_1) {
    var core_1, AppComponent, __decorate = this && this.__decorate || function(decorators, target, key, desc) {
        var d, c = arguments.length, r = 3 > c ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (3 > c ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }, __metadata = this && this.__metadata || function(k, v) {
        return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(k, v) : void 0;
    };
    return {
        setters: [ function(core_1_1) {
            core_1 = core_1_1;
        } ],
        execute: function() {
            AppComponent = function() {
                function AppComponent() {
                    this.name = "Daniel";
                }
                return AppComponent = __decorate([ core_1.Component({
                    selector: "my-app",
                    template: "<h1>My First Angular 2 App {{name}}</h1>"
                }), __metadata("design:paramtypes", []) ], AppComponent);
            }(), exports_1("AppComponent", AppComponent);
        }
    };
}), System.register([ "angular2/platform/browser", "./app.component" ], function(exports_1) {
    var browser_1, app_component_1;
    return {
        setters: [ function(browser_1_1) {
            browser_1 = browser_1_1;
        }, function(app_component_1_1) {
            app_component_1 = app_component_1_1;
        } ],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent);
        }
    };
});