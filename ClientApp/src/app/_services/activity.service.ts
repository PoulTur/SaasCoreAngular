import { Injectable } from "@angular/core";
import { Activity } from "../_models/activity";
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";


@Injectable()
export class ActivityService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = "https://localhost:44387/api/Activities/";
  }

  getAllActivities() {
    return this.http.get(this.baseUrl);
  }

  postActivity(activity: Activity) {
    return this.http.post(this.baseUrl, activity);
  }

  //updateActivity(activity: Activity): Observable<Activity> {
  //  return this._authHttp.put(this.baseUrl + activity.activityId, activity)
  //    .map((response: Response) => <Activity>response.json());
  //}

  //deleteActivity(id: number): Observable<number> {
  //  return this._authHttp.delete(this.baseUrl + id)
  //    .map((response: Response) => <number>response.json());
  //}



}
