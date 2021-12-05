import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { NavbarComponent } from './common/layout/navbar/navbar.component';
import { FooterComponent } from './common/layout/footer/footer.component';
import { MobilemenuComponent } from './common/layout/mobilemenu/mobilemenu.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    FooterComponent,
    MobilemenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
