import { SkiResortDetails } from './models/resortDetail';
import { ResortService } from './../services/resort.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resort',
  templateUrl: './resort.component.html',
  styleUrls: ['./resort.component.scss']
})
export class ResortComponent implements OnInit {
skiResortId:number = 0;
skiResort:SkiResortDetails = new SkiResortDetails();
  constructor(private route:ActivatedRoute, private service:ResortService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:any)=>{
     this.skiResortId = params['skiResortId']
     this.getResort();
    })
  }
 getResort(){
this.service.getResort(this.skiResortId).subscribe((data:any)=>{
  this.skiResort = data
  console.log(this.skiResort)
})
 }
}
