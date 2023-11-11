import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  url="http://localhost:8770/api/vehicle"
  constructor(private http:HttpClient) { }
  getAllVehicle()
  {
    return this.http.get(this.url)
  }
  addVehicle(data: any){
    console.warn(data)
    return this.http.post(this.url,data)
  }
  // updateStatus(data:any){
  //   console.warn(data)
  //   return this.http.put()
  // }
}
