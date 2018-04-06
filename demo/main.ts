import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import 'hammerjs';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
