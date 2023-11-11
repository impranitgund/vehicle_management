import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-all-vehicles',
  templateUrl: './all-vehicles.component.html',
  styleUrls: ['./all-vehicles.component.css']
})
export class AllVehiclesComponent implements OnInit{
  constructor(private vlist: VehicleService){}
  collection:any={ };
  ngOnInit(): void {
    this.vlist.getAllVehicle().subscribe((result)=>{
      //console.warn(result);
      this.collection=result
    })
  }

}
