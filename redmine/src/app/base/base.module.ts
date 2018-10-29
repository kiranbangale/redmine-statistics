import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BaseRoutingModule } from "./base-routing.module";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { BaseComponent } from "./base.component";
import { MenuComponent } from "./menu/menu.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

@NgModule({
  imports: [CommonModule, BaseRoutingModule],
  declarations: [
    HeaderComponent,
    FooterComponent,
    BaseComponent,
    MenuComponent,
    DashboardComponent
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class BaseModule {}
