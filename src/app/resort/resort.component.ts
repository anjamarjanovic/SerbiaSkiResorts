import { SkiPassPrice } from './models/skiPass';
import { Weather } from './models/weather';
import { SkiResortDetails } from './models/resortDetail';
import { ResortService } from './../services/resort.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tracks } from './models/tracks';

@Component({
  selector: 'app-resort',
  templateUrl: './resort.component.html',
  styleUrls: ['./resort.component.scss']
})
export class ResortComponent implements OnInit {
skiResortId:number = 0;
skiResort:SkiResortDetails = new SkiResortDetails();
tracks:Tracks[] = [];
weather:Weather[]=[];
skiPassPrice:SkiPassPrice[] = [];
params={
  sort:''
}
  constructor(private route:ActivatedRoute, private service:ResortService) { }

  ngOnInit(): void {
   this.route.params.subscribe((params:any)=>{
    this.skiResortId = params['skiResortId']
    this.getResort();
    this.getTracks();
    this.getWeather();
    this.getSkipass();
  
    });
  }

 getResort(){
this.service.getResort(this.skiResortId).subscribe((data:any)=>{
  this.skiResort = data

})
 }
 getTracks(){
  this.service.getTracks(this.skiResortId,this.params).subscribe((data:any)=>{
    this.tracks = data;
  })
}
updateSort(sort:string){
  this.service.getTracks(this.skiResortId, sort).subscribe(tracks => this.tracks = tracks);
}

getWeather(){
 this.service.getWeather(this.skiResortId).subscribe((res)=>{
  this.weather = res
console.log(res)
 
 } )
}
getSkipass(){
  this.service.getSkipass(this.skiResortId).subscribe((data:any)=>{
    this.skiPassPrice = data;
    console.log(this.skiPassPrice);
  })
}
newReservation(reservation:any) {
  reservation.mountain_id = this.skiResortId;
  this.service.saveReservation(reservation).subscribe(res => {
    window.alert("Reservation successful!");
  }, err => {
    window.alert("Error: " + err);
  });
}
}



