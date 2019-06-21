import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [{path:"",component:MenuComponent ,children:[{path:"",component:HomeComponent},{path:"home",redirectTo:""},
{path:"service",component:ServiceComponent},{path:"booking-details",component:BookingDetailsComponent},{path:"payment",component:PaymentComponent},]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
