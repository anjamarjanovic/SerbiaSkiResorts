import { SkiResortDetails } from './../resort/models/resortDetail';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { SkiResort } from '../resort/models/resort';
import { Tracks } from '../resort/models/tracks';
import { SkiPassPrice } from '../resort/models/skiPass';
import { Weather } from '../resort/models/weather';
import { Reservation } from '../resort/models/reservation';

const baseUrl ='http://localhost:3000/api/skiresorts';
@Injectable({
  providedIn: 'root'
})
export class ResortService {

  constructor(private http:HttpClient) {
    
   }


getNames(): Observable<SkiResort[]> {
    return this.http.get<Array<SkiResort>>(baseUrl).pipe(map(res => {
      let retVal = new Array<SkiResort>();
      res.forEach(elem => retVal.push(new SkiResort(elem)));
      return retVal;
    }));
}
getResort(skiResortId:number): Observable<SkiResortDetails> {
  return this.http.get(`${baseUrl}/${skiResortId}`).pipe(map((data => {
    return new SkiResortDetails(data);
  })));
}


getTracks(skiResortId:number,params?:any):Observable<Tracks[]>{
  let queryParams = {}

  if(params) {
    queryParams = {
      params: new HttpParams()
      .set('sort', params.sort || "")

    }
  }
return this.http.get<Array<Tracks>>(`${baseUrl}/${skiResortId}/tracks`,queryParams).pipe(map((data:Tracks[])=>{
    let retVal = new Array<Tracks>();
    data.forEach(elem => retVal.push(new Tracks(elem)));
    return retVal;
  }))
}


getSkiPassPrice(skiResortId: number): Observable<SkiPassPrice[]> {
  return this.http.get<Array<SkiPassPrice>>(`${baseUrl}/${skiResortId}/skipass`).pipe(map(res => {
    let retVal = new Array<SkiPassPrice>();
    res.forEach(elem => retVal.push(new SkiPassPrice(elem)));
    return retVal;
  }));
}
getWeather(skiResortId:number): Observable<Weather[]> {
  return this.http.get<Array<Weather>>(`${baseUrl}/${skiResortId}/weather`).pipe(map(res => {
    let retVal = new Array<Weather>();
    res.forEach(elem => retVal.push(new Weather(elem)));
    return retVal;
  }));
}
getSkipass(skiResortId:number):Observable<SkiPassPrice[]>{
  return this.http.get<Array<SkiPassPrice>>(`${baseUrl}/${skiResortId}/skipass`).pipe(map(res => {
    let retVal = new Array<SkiPassPrice>();
    res.forEach(elem => retVal.push(new SkiPassPrice(elem)));
    return retVal;
  }));
}

saveReservation(reservation: Reservation) {
  return this.http.post(baseUrl + "/" + reservation.mountain_id + "/skipass", reservation);
}
}
