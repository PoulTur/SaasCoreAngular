var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter } from '@angular/core';
var NavMenuComponent = /** @class */ (function () {
    function NavMenuComponent() {
        this.selectView = new EventEmitter();
    }
    NavMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.items = [
            { label: 'Activities', icon: 'fa fa-fw fa-clone', command: function (event) { return _this.selectView.emit(event.item.label); } },
            { label: 'Classes', icon: 'fa fa-fw fa-bar-chart', command: function (event) { return _this.selectView.emit(event.item.label); } }
        ];
    };
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], NavMenuComponent.prototype, "selectView", void 0);
    NavMenuComponent = __decorate([
        Component({
            selector: 'app-nav-menu',
            templateUrl: './nav-menu.component.html'
        })
    ], NavMenuComponent);
    return NavMenuComponent;
}());
export { NavMenuComponent };
//# sourceMappingURL=nav-menu.component.js.map