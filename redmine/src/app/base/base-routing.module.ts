import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BaseComponent } from "./base.component";
import { MenuComponent } from "./menu/menu.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AuthGuard } from "../auth/auth-guard.service";

const routes: Routes = [
  {
    path: "base",
    component: BaseComponent,
    children: [
      { path: "", component: MenuComponent, canActivate: [AuthGuard] },
      {
        path: "",
        component: DashboardComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class BaseRoutingModule {}
