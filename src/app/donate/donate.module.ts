import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonateRoutingModule } from './donate-routing.module';
import { DonateComponent } from './donate.component';
import { OrganizationListComponent } from '../components/organization-list/organization-list.component';

@NgModule({
  declarations: [DonateComponent, OrganizationListComponent],
  imports: [CommonModule, DonateRoutingModule],
})
export class DonateModule {}
