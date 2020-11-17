import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppSharedModule } from './app-shared/app-shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogActionsExampleComponent } from './dialog-actions-example/dialog-actions-example.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogActionsExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppSharedModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
