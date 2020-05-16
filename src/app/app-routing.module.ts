import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { BookingTicketsComponent } from './booking-tickets/booking-tickets.component';
import { CancelTicketsComponent } from './cancel-tickets/cancel-tickets.component';
import { ViewBookingComponent } from './view-booking/view-booking.component';

import { ScheduleflightsComponent } from './scheduleflights/scheduleflights.component';


const routes: Routes = [
  {path:'Book-ticket', component:BookFlightComponent},
  {path:'', component:BookingTicketsComponent},
  {path:'add-booking', component:BookingTicketsComponent},
  {path:'cancel-booking', component:CancelTicketsComponent},
  {path:'view-booking', component:ViewBookingComponent},
  {path:'schedule', component:ScheduleflightsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
