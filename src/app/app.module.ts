import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { FooterComponent } from './footer/footer.component';
import { ShopComponent } from './shop/shop.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './banner/banner.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { MapComponent } from './map/map.component';
import { FeatureFoodComponent } from './feature-food/feature-food.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostComponent,
    FooterComponent,
    ShopComponent,
    AboutComponent,
    LoginComponent,
    HomeComponent,
    BannerComponent,
    JumbotronComponent,
    MapComponent,
    FeatureFoodComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'post',
        component: PostComponent,
      },
      {
        path: 'shop',
        component: ShopComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
