import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UlContainerComponent } from './ul-container/ul-container.component';
import { NamesContainerComponent } from './names-container/name-container.component';
import { TeamsContainerComponent } from './teams-container/teams-container.component';

@NgModule({
  declarations: [
    AppComponent,
    UlContainerComponent,
    NamesContainerComponent,
    TeamsContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
