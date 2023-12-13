import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DmrTwoWayRadiosComponent } from './components/products/dmr-two-way-radios/dmr-two-way-radios.component';
import { DmrRepeatersAndSystemsComponent } from './components/products/dmr-repeaters-and-systems/dmr-repeaters-and-systems.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'product-new/digital-radio/dmr-two-way-radios', component: DmrTwoWayRadiosComponent },
  { path: 'product-new/digital-radio/dmr-repeaters-and-systems', component: DmrRepeatersAndSystemsComponent },
  { path: '**', component: HomeComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
