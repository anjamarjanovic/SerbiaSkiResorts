import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { FooterComponent } from './core/footer/footer.component';
import { ResortComponent } from './resort/resort.component';
import { HomeComponent } from './home/home.component';
import { PanelComponent } from './resort/panel/panel.component';
import { TracksComponent } from './resort/tracks/tracks.component';
import { WeatherComponent } from './resort/weather/weather.component';
import { SkipassComponent } from './resort/skipass/skipass.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ResortComponent,
    HomeComponent,
    PanelComponent,
    TracksComponent,
    WeatherComponent,
    SkipassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
