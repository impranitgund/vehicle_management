import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'

@Component({
  selector: 'app-update-status',
  templateUrl: './update-status.component.html',
  styleUrls: ['./update-status.component.css']
})
export class UpdateStatusComponent implements OnInit{

  updateStatus=new FormGroup({
    status:new FormControl(''),
    soldDate:new FormControl('')

  })

  constructor(){}

  ngOnInit():void{}

  collectStatus(){
    
  }



}
