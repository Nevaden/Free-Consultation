import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { NavSectionComponent } from './nav-section/nav-section.component';
import { ProfileBlurbComponent } from './profile-blurb/profile-blurb.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MyWorkComponent,
    AppointmentComponent,
    NavSectionComponent,
    ProfileBlurbComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
