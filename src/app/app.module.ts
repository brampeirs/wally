import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PublicPageComponent } from './views/layouts/public-page/public-page.component';
import { PrivatePageComponent } from './views/layouts/private-page/private-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutes } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment.prod';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    PublicPageComponent,
    PrivatePageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes),
    HttpClientModule, // import HttpClientModule must come after BrowserModule.
  ],
  exports: [
    RouterModule
  ],
  providers: [
    environment['ENV_PROVIDERS']
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
