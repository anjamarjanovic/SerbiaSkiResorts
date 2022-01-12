import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { SkiResort } from '../resort/models/resort';

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
}
