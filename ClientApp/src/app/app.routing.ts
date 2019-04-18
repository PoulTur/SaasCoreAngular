import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "../app/home/home.component";
import { AdminComponent } from "../app/admin/admin.component";
import { LoginComponent } from "../app/login/login.component";
import { AuthGuard } from "../app/_guards/auth.guard";
import { Role } from "../app/_models/role";

const appRoutes: Routes = [
  {
    path: "",
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: "login",
    component: LoginComponent
  },

  // otherwise redirect to home
  { path: "**", redirectTo: "" }
];

export const routing = RouterModule.forRoot(appRoutes);
