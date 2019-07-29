import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
import {NgPipesModule} from 'ngx-pipes';

import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from '../app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {AuthGuardService as AuthGuard} from '../auth/services/auth-guard.service';
import {AuthService} from '../auth/services/auth.service';
import {AuthEffects} from '../auth/store/effects/auth.effects';
import {reducers} from '../auth/store/app.states';
import {ErrorInterceptor, TokenInterceptor} from '../auth/services/token.interceptor';

import {UnauthorizedLandingComponent} from '../auth/components/unauthorized-landing/unauthorized-landing.component';
import {StatusComponent} from '../auth/components/status/status.component';
import {ContentService} from '../services/content.service';
import {AppConfig} from '../config/app-config';
import {FileRepositoryComponent} from '../components/file-repository/file-repository.component';
import {FileCheckComponent} from '../components/file-check/file-check.component';
import {FooterComponent} from '../components/nav/footer/footer.component';
import {NavbarComponent} from '../components/nav/navbar/navbar.component';
import {DownloadModalComponent} from '../components/widgets/download-modal/download-modal.component';
import {UploadModalComponent} from '../components/widgets/upload-modal/upload-modal.component';
import {InMemMockService} from '../services/in-mem-mock-service';
import {FilesSizeSum} from '../pipes/files-size-sum';
import {FilesLastUpdatePipe} from '../pipes/files-last-update.pipe';
import {FilesLastVersionPipe} from '../pipes/files-last-version.pipe';
import {FilesCountPipe} from '../pipes/files-count.pipe';
import {FileDescriptorPipe} from '../pipes/file-descriptor.pipe';
import {MailingSearchComponent} from '../components/mailing-search/mailing-search.component';
import {MutagenizedStatusPipe} from '../pipes/mutagenized-status.pipe';

export function initConfig(config: AppConfig) {
  return () => config.load();
}

@NgModule({
  declarations: [
    FileRepositoryComponent,
    FileCheckComponent,
    DownloadModalComponent,
    UploadModalComponent,
    FooterComponent,
    NavbarComponent,
    UnauthorizedLandingComponent,
    StatusComponent,
    FilesSizeSum,
    FilesLastUpdatePipe,
    FilesLastVersionPipe,
    FilesCountPipe,
    FileDescriptorPipe,
    MailingSearchComponent,
    MutagenizedStatusPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([AuthEffects]),
    HttpClientInMemoryWebApiModule.forRoot(InMemMockService, {passThruUnknownUrl: true}),
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    BrowserAnimationsModule,
    NgPipesModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    DownloadModalComponent,
    UploadModalComponent
  ],
  providers: [
    // InsilicoService,
    // CcsService,
    FilesLastUpdatePipe,
    MutagenizedStatusPipe,
    AuthGuard,
    AuthService,
    ContentService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    AppConfig,
    {
      provide: APP_INITIALIZER,
      useFactory: initConfig,
      deps: [AppConfig],
      multi: true
    }
  ],
  exports: [
    FileRepositoryComponent,
    FileCheckComponent,
    DownloadModalComponent,
    UploadModalComponent,
    FooterComponent,
    NavbarComponent,
    UnauthorizedLandingComponent,
    StatusComponent,
    FilesSizeSum,
    FilesLastUpdatePipe,
    FilesLastVersionPipe,
    FilesCountPipe,
    FileDescriptorPipe,
    MailingSearchComponent,
    MutagenizedStatusPipe,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    BrowserAnimationsModule,
    NgPipesModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {
}
