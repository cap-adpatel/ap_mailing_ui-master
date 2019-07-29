import {enableProdMode} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'hammerjs';

import { AppModule } from './app/app.module';

// uncomment for production build start
// try {
//   enableProdMode();
//   if (window) {
//     window.console.log = function() {};
//   }
// } catch (exception) {
//   console.error('ENABLE PROD MODE FAILED', exception);
// }
// uncomment for production build end

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
