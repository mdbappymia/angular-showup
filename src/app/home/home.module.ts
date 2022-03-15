import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BannerComponent } from '../banner/banner.component';
import { JumbotronComponent } from '../jumbotron/jumbotron.component';
import { MapComponent } from '../map/map.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    JumbotronComponent,
    MapComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [HomeComponent],
})
export class AppModule {}
