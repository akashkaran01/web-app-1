import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { DmrTwoWayRadiosComponent } from './components/products/dmr-two-way-radios/dmr-two-way-radios.component';
import { SubHeaderPageImageContainerComponent } from './shared/components/sub-header-page-image-container/sub-header-page-image-container.component';
import { LeftImageRightTextComponent } from './shared/components/left-image-right-text/left-image-right-text.component';
import { RightImageLeftTextComponent } from './shared/components/right-image-left-text/right-image-left-text.component';
import { HeaderAndTextComponent } from './shared/components/header-and-text/header-and-text.component';
import { DmrRepeatersAndSystemsComponent } from './components/products/dmr-repeaters-and-systems/dmr-repeaters-and-systems.component';
import { AnalogueTwoWayRadiosComponent } from './components/products/analogue-two-way-radios/analogue-two-way-radios.component';
import { TetraRadiosComponent } from './components/products/tetra-radios/tetra-radios.component';
import { TeraSystemsComponent } from './components/products/tera-systems/tera-systems.component';
import { IntrinsicallySafeRadiosComponent } from './components/products/intrinsically-safe-radios/intrinsically-safe-radios.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    DmrTwoWayRadiosComponent,
    SubHeaderPageImageContainerComponent,
    LeftImageRightTextComponent,
    RightImageLeftTextComponent,
    HeaderAndTextComponent,
    DmrRepeatersAndSystemsComponent,
    AnalogueTwoWayRadiosComponent,
    TetraRadiosComponent,
    TeraSystemsComponent,
    IntrinsicallySafeRadiosComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
