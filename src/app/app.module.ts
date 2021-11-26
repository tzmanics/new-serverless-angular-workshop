import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AuthModule } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [AppComponent, NavigationComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'tzmanics.auth0.com',
      clientId: 'kDdgqBa0zN-v_pYu3DtqUfGw8PgEcwxx',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
