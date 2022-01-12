import { SkiResort } from './../../resort/models/resort';
import { ResortService } from './../../services/resort.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
resorts:SkiResort[] = [];
  constructor(private service:ResortService) { }

  ngOnInit(): void {
    this.getNames()
  }
getNames(){
  this.service.getNames().subscribe((data:any)=>this.resorts= data)
}

}
