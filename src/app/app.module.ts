import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HttpModule} from '@angular/http';
import {ConfirmDialogModule, ConfirmationService} from 'primeng/primeng';
import {AppComponent} from './app.component';
import {AppHeaderComponent} from './appHeader/appHeader.component';
import {DataTableModule, SharedModule} from 'primeng/primeng';
import {AccordionModule} from 'primeng/primeng';
import {NationalReportComponent} from './nationalReport/nationalReport.component';
import {ButtonModule} from 'primeng/primeng';
import {Routes, RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/primeng';
import {SplitButtonModule} from 'primeng/primeng';
import {MenuModule, MenuItem} from 'primeng/primeng';
import {routing} from './app.routes';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReportDataService} from './report.service';
import {AppActionComponent} from './app-action/app-action.component';
import {GrowlModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent, AppHeaderComponent, NationalReportComponent, AppActionComponent
  ],
  imports: [
    routing,
    DataTableModule,
    ConfirmDialogModule,
    HttpModule,
    SharedModule,
    BrowserModule,
    TabViewModule,
    SplitButtonModule,
    ButtonModule,
    GrowlModule,
    MenuModule,
    BrowserAnimationsModule
  ],
  providers: [
    ReportDataService, ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}