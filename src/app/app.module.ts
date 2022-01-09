import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  ServiceWorkerModule,
  SwRegistrationOptions,
} from '@angular/service-worker';

import { AppComponent } from './app.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('service-worker.js'),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  declarations: [AppComponent, SearchFormComponent, PostDetailComponent],
  providers: [
    {
      provide: SwRegistrationOptions,
      useFactory: () => ({ enabled: location.search.includes('sw=true') }),
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
