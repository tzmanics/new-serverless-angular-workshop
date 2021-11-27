import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { AuthModule } from '@auth0/auth0-angular';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
// import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AccountComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    // AuthModule.forRoot(environment.auth),
  ],
})
export class AccountModule {}
