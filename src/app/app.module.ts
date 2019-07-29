import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppComponent} from './app.component';

import {SharedModule} from './shared/shared.module';
import {AdminModule} from './admin/admin.module';

import {MainComponent} from './components/main/main.component';
import {RouterModule} from '@angular/router';
import {AuthGuardService as AuthGuard} from './auth/services/auth-guard.service';
import {UnauthorizedLandingComponent} from './auth/components/unauthorized-landing/unauthorized-landing.component';
import {environment} from '../environments/environment';
import {SystemMaintenanceComponent} from './auth/components/system-maintenance/system-maintenance.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
const isStaff = environment.isStaff;

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AngularFontAwesomeModule,
    isStaff ? AdminModule : [],
    RouterModule.forRoot([
      {path: '', component: MainComponent, canActivate: [AuthGuard], runGuardsAndResolvers: 'always'},
      {path: 'unauthorized', component: UnauthorizedLandingComponent},
      {path: 'maintenance',  component: SystemMaintenanceComponent},
      {path: '**', redirectTo: '/'}
    ], {onSameUrlNavigation: 'reload'}),
  ],
  declarations: [
    MainComponent,
    AppComponent,
    SystemMaintenanceComponent
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



