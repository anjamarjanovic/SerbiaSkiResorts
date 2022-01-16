import { ResortService } from './../../services/resort.service';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { SkiResort } from 'src/app/resort/models/resort';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
resorts:SkiResort[] = [];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private service:ResortService) {}
ngOnInit(){
  this.getNames()
}
getNames(){
  this.service.getNames().subscribe((data:any)=>{
    this.resorts = data;
  })
}

}
