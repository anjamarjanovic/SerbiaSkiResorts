import { Component, Input, OnInit } from '@angular/core';
import { Weather } from '../models/weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  @Input() weather: Weather = new Weather();

  constructor() { }

  ngOnInit(): void {
  }

}
