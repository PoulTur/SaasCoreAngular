var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ConfirmationService } from "primeng/primeng";
import { Component } from "@angular/core";
import { ActivityService } from "../_services/activity.service";
var ActivitiesComponent = /** @class */ (function () {
    function ActivitiesComponent(_activityService, confirmationService) {
        this._activityService = _activityService;
        this.confirmationService = confirmationService;
        this.editorVisible = false;
        this.formValid = false;
    }
    ActivitiesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activityService.getAllActivities().subscribe(function (data) {
            _this.activities = data;
        });
    };
    ActivitiesComponent = __decorate([
        Component({
            selector: "app-activities",
            templateUrl: "./activities.component.html"
        }),
        __metadata("design:paramtypes", [ActivityService, ConfirmationService])
    ], ActivitiesComponent);
    return ActivitiesComponent;
}());
export { ActivitiesComponent };
//# sourceMappingURL=activities.component.js.map