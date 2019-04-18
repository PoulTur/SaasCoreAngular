var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import "rxjs/add/operator/map";
var ActivityService = /** @class */ (function () {
    function ActivityService(http) {
        this.http = http;
        this.baseUrl = "https://localhost:44387/api/Activities/";
    }
    ActivityService.prototype.getAllActivities = function () {
        return this.http.get(this.baseUrl);
    };
    ActivityService.prototype.postActivity = function (activity) {
        return this.http.post(this.baseUrl, activity);
    };
    ActivityService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], ActivityService);
    return ActivityService;
}());
export { ActivityService };
//# sourceMappingURL=activity.service.js.map