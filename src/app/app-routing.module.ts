import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component'
import {UpdateStatusComponent} from './update-status/update-status.component'
import {AllVehiclesComponent} from './all-vehicles/all-vehicles.component'


const routes: Routes = [
  {
    component: AddVehicleComponent,
    path:'add'
  },
  {
    component: AllVehiclesComponent,
    path:'list'
  },
  {
    component: UpdateStatusComponent,
    path:'update/:id'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
