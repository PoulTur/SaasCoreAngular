import { Activity } from "../_models/activity";


import { ConfirmationService } from "primeng/primeng";
import { Component, OnInit } from "@angular/core";
import { ActivityService } from "../_services/activity.service";
import { Event } from "@angular/router/src/events";
import { Message } from "primeng/components/common/message";


@Component({
  selector: "app-activities",
  templateUrl: "./activities.component.html"
})
export class ActivitiesComponent implements OnInit {

  activities;
  editorVisible: boolean = false;
  selectedActivity: Activity;
  growlMsgs: Message[];
  formValid: boolean = false;

  constructor(private _activityService: ActivityService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this._activityService.getAllActivities().subscribe((data) => {
      this.activities = data;
    });
    
  }

  //edit(row: Activity, index: number) {
  //  this.selectedActivity = row;
  //  this.editorVisible = true;
  //}

  //delete(row: Activity, index: number) {
  //  this.confirmationService.confirm({
  //    message: "Are you sure?",
  //    header: "Confirmation",
  //    icon: "fa fa-question-circle",
  //    accept: () => {
  //      this.growlMsgs = [{ severity: "info", summary: "Confirmed", detail: "Activity was deleted." }];
  //      this._activityService.deleteActivity(row.activityId)
  //        .subscribe((id) => {
  //          this.activities = this.activities.filter(x => x.activityId !== id);
  //          this.editorVisible = false;
  //          this.selectedActivity = null;
  //          this.formValid = false;
  //        });
  //    },
  //    reject: () => {
  //    }
  //  });

  //}

  //closeEditor(event: Event) {
  //  this.selectedActivity = null;
  //  this.formValid = false;
  //}

  //saveEdit(event) {
  //  if (this.selectedActivity.activityId === 0) {
  //    this._activityService.postActivity(this.selectedActivity)
  //      .subscribe((activity) => {
  //        this.editorVisible = false;
  //        this.selectedActivity = null;
  //        this.activities = [...this.activities, activity];
  //        this.formValid = false;
  //      });
  //  } else {
  //    this._activityService.updateActivity(this.selectedActivity)
  //      .subscribe((activity) => {
  //        this.editorVisible = false;
  //        this.selectedActivity = null;
  //        let index = this.activities.findIndex(x => x.activityId === activity.activityId);
  //        this.activities[index] = activity;
  //        this.activities = [...this.activities];
  //        this.formValid = false;
  //      });
  //  }
  //}

  //handleActivityUpdate(e) {
  //  this.selectedActivity = e;
  //}

  //handleFormValidityChange(e) {
  //  this.formValid = e;
  //}

  //cancelEdit(event) {
  //  this.editorVisible = false;
  //  this.selectedActivity = null;
  //  this.formValid = false;
  //}

  //addActivity() {
  //  this.editorVisible = true;
  //  this.selectedActivity = new Activity();
  //  this.selectedActivity.activityId = 0;
  //}

}
