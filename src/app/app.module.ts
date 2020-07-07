import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import {HttpClientModule} from '@angular/common/http';
import { VideoComponent } from './features/video/video.component';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { NgxCarouselModule } from 'ngx-light-carousel';
import {NgxHmCarouselModule} from 'ngx-hm-carousel';
import {FormsModule} from '@angular/forms';
import { SafePipe } from './safe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    VideoComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    NgxYoutubePlayerModule.forRoot(),
    NgxCarouselModule,
    NgxHmCarouselModule,
    FormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
