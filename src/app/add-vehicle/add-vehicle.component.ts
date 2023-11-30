import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
import {VehicleService} from '../vehicle.service'



@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit{

 
addVehicle=new FormGroup({
  make :new FormControl(''),
  year : new FormControl(''),
  modelName: new FormControl(''),
  status: new FormControl(''),
  soldDate:new FormControl('')
})
constructor(private vehicle:VehicleService ) 
 {


  }

ngOnInit():void{}
collectVehicle()
{
  
  this.vehicle.addVehicle(this.addVehicle.value).subscribe((result)=>{
    console.warn(result);
    

})
}}
