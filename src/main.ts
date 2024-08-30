import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense(
  'Ngo9BigBOggjHTQxAR8/V1NCaF1cWWhAYVFxWmFZfVpgdVRMYl9bRXdPIiBoS35RckVrW3dcc3ZRR2NfUE10'
);

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
