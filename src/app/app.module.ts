import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { PreloadAllModules, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { environment } from '../environments/environment';
import { httpInterceptorProviders } from './interceptors';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule, // import HttpClientModule must come after BrowserModule.,
    RouterModule.forRoot(AppRoutes, {preloadingStrategy: PreloadAllModules}), // preLoad lazy modules chunks afer loading app
    CoreModule
  ],
  providers: [
    httpInterceptorProviders,
    environment['ENV_PROVIDERS']
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
