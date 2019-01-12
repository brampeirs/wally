import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutes } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment.prod';
import { httpInterceptorProviders } from './interceptors';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { PublicPageComponent } from './layouts/public-page/public-page.component';
import { PrivatePageComponent } from './layouts/private-page/private-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicPageComponent,
    PrivatePageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule, // import HttpClientModule must come after BrowserModule.,
    RouterModule.forRoot(AppRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  providers: [
    httpInterceptorProviders,
    environment['ENV_PROVIDERS']
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
