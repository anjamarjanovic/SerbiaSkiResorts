import { Tracks } from './../models/tracks';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})
export class TracksComponent implements OnInit {
@Input() tracks:Tracks[] = [];
selectSort= "";
@Output() sortChange = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
changeSort(){
  this.sortChange.emit({"sort": this.selectSort});
  
}
}
