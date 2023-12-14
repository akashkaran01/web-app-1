import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DmrTwoWayRadiosComponent } from './components/products/dmr-two-way-radios/dmr-two-way-radios.component';
import { DmrRepeatersAndSystemsComponent } from './components/products/dmr-repeaters-and-systems/dmr-repeaters-and-systems.component';
import { AnalogueTwoWayRadiosComponent } from './components/products/analogue-two-way-radios/analogue-two-way-radios.component';
import { TetraRadiosComponent } from './components/products/tetra-radios/tetra-radios.component';
import { TeraSystemsComponent } from './components/products/tera-systems/tera-systems.component';
import { IntrinsicallySafeRadiosComponent } from './components/products/intrinsically-safe-radios/intrinsically-safe-radios.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'product-new/digital-radio/dmr-two-way-radios', component: DmrTwoWayRadiosComponent },
  { path: 'product-new/digital-radio/dmr-repeaters-and-systems', component: DmrRepeatersAndSystemsComponent },
  { path: 'product-new/analog-two-way-radio/analog-radio', component: AnalogueTwoWayRadiosComponent },
  { path: 'product-new/digital-radio/tetra-two-way-radio', component: TetraRadiosComponent },
  { path: 'product-new/digital-radio/tetra-systems', component: TeraSystemsComponent },
  { path: 'product-new/intrinsically-safe-radios', component: IntrinsicallySafeRadiosComponent },
  { path: 'contact-saikia', component: ContactUsComponent },
  { path: '**', component: HomeComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
