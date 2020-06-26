import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {SezServService} from '../../service/sez-serv.service';
import {Video} from '../../model/video';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {map} from 'rxjs/operators';

const ApiVideoUrl = 'http://localhost/video.php?idsez=';
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
 videos: Video[];
 video: any;
 // images: Array<string>;


  constructor(
    private sezService: SezServService,
    private activatedRoute: ActivatedRoute,
    // private _http: HttpClient,

  ) {

  }

  ngOnInit(): void {
    const id = + this.activatedRoute.snapshot.params.id;
    this.sezService.getVideoById(id)
      .subscribe((res: Video[]) => {
        this.videos = res;
      });
    console.log(this.videos);

    // this._http.get('https://picsum.photos/list')
    //   .pipe(map((images: Array<{id: number}>) => this._randomImageUrls(images)))
    //   .subscribe(images => this.images = images);


  }

  // private _randomImageUrls(images: Array<{id: number}>): Array<string> {
  //   return [1, 2, 3].map(() => {
  //     const randomId = images[Math.floor(Math.random() * images.length)].id;
  //     return `https://picsum.photos/900/500?image=${randomId}`;
  //   });
  // }



}
