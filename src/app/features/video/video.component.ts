import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {SezServService} from '../../service/sez-serv.service';
import {Video} from '../../model/video';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {map} from 'rxjs/operators';
// tslint:disable-next-line:import-spacing
import { ngxLightOptions } from  'ngx-light-carousel/public-api';
import {NgxHmCarouselBreakPointUp} from 'ngx-hm-carousel';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
// const ApiVideoUrl = 'http://localhost/video.php?idsez=';
const ApiVideoUrl = 'https://secret-escarpment-08158.herokuapp.com/video.php?idsez=';
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  safeSrc: SafeResourceUrl;
  id = 'yFnQu0kmCuY';
  playerVars = {
    cc_lang_pref: 'en'
  };
  public innerWidth: any;
  version = '...';
  public player;
  public ytEvent;
  slides: any;
  products: any;
  products2: any;
  options1: any;
  options: ngxLightOptions;
  options2: any;
  options3: any;

  public videos: Video[];
 // images: Array<string>;

  index = 1;
  speed = 2000;
  infinite = true;
  direction = 'right';
  directionToggle = true;
  autoplay = true;

  avatars = '12345'.split('').map((x, i) => {
    const num = i;
    // const num = Math.floor(Math.random() * 1000);
    return {
      url: `https://picsum.photos/600/400/?${num}`,
      title: `${num}`
    };
  });
  breakpoint: NgxHmCarouselBreakPointUp[] = [
    {
      width: 375,
      number: 1
    },
    {
      width: 500,
      number: 2
    },
    {
      width: 768,
      number: 3
    },
    {
      width: 1024,
      number: 5
    },
  ];

  constructor(
    private sezService: SezServService,
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer
    // public videos: this.videos,
    // private _http: HttpClient,

  ) {
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/c9F5kMUfFKk');
    this.options = {
      scroll: undefined,
      animation: {
        animationClass: 'transition',
        animationTime: 200,
      },
      swipe: {
        swipeable: true,
        swipeVelocity: 1,
      },
      drag: {
        draggable: true,
        dragMany: true,
      },
      infinite: true,
      autoplay: {
        enabled: true,
        direction: 'right',
        delay: 5000,
        stopOnHover: true,
      },
      breakpoints: [
        {
          width: 768,
          number: 1,
        },
        {
          width: 991,
          number: 3,
        },
        {
          width: 9999,
          number: 4,
        },
      ]
    };

    // construct an array of slides
    this.slides = [];
    this.slides.push({
      title: 'RED Widgets',
      url: 'https://url',
      image: `http://picsum.photos/600/400/?0`,
    });
    this.slides.push({
      title: 'YELLOW Widgets',
      url: 'https://url',
      image: `http://picsum.photos/600/400/?1`,
    });
    this.slides.push({
      title: 'Black Widgets',
      url: 'https://url',
      image: `http://picsum.photos/600/400/?2`,
    });
    this.slides.push({
      title: 'Grey Widgets',
      url: 'https://url',
      image: `http://picsum.photos/600/400/?3`,
    });
    this.slides.push({
      title: 'Green Widgets',
      url: 'https://url',
      image: `http://picsum.photos/600/400/?4`,
    });
    this.slides.push({
      title: 'YELLOW Widgets',
      url: 'https://url',
      image: `http://picsum.photos/600/400/?1`,
    });
    this.slides.push({
      title: 'YELLOW Widgets',
      url: 'https://url',
      image: `http://picsum.photos/600/400/?1`,
    });
    this.slides.push({
      title: 'YELLOW Widgets',
      url: 'https://url',
      image: `http://picsum.photos/600/400/?1`,
    });


    this.options1 = {
      animation: {
        animationClass: 'transition',
        animationTime: 200,
      },
      swipe: {
        swipeable: true,
        swipeVelocity: 1,
      },
      drag: {
        draggable: true,
        dragMany: true,
      },
      infinite: true,
      autoplay: {
        enabled: true,
        direction: 'right',
        delay: 5000,
        stopOnHover: true,
        speed: 6000,
      },
      breakpoints: [
        {
          width: 991,
          number: 1,
        },
        {
          width: 991,
          number: 3,
        },
        {
          width: 9999,
          number: 4,
        },
      ],
    };
    this.options2 = {
      animation: {
        animationClass: 'transition', // done
        animationTime: 200,
      },
      swipe: {
        swipeable: true, // done
        swipeVelocity: 1, // done - check amount
      },
      drag: {
        draggable: true, // done
        dragMany: true, // todo
      },
      infinite: false,
      breakpoints: [
        {
          width: 768,
          number: 1,
        },
        {
          width: 991,
          number: 3,
        },
        {
          width: 9999,
          number: 4,
        },
      ],
    };
    this.options3 = {
      animation: {
        animationClass: 'transition', // done
        animationTime: 200,
      },
      swipe: {
        swipeable: true, // done
        swipeVelocity: 1, // done - check amount
      },
      drag: {
        draggable: true, // done
        dragMany: true, // todo
      },
      infinite: true,
      breakpoints: [
        {
          width: 768,
          number: 1,
        },
        {
          width: 991,
          number: 3,
        },
        {
          width: 9999,
          number: 4,
        },
      ],
    };
    this.products = [];
    this.products.push({
      title: 'RED Widgets',
      url: 'https://url',
      regularPrice: '100.00',
      salePrice: '100.00',
      image: `https://picsum.photos/600/400/?0`,
    });
    this.products.push({
      title: 'YELLOW Widgets',
      url: 'https://url',
      regularPrice: '100.00',
      salePrice: '100.00',
      image: `https://picsum.photos/600/400/?1`,
    });
    this.products.push({
      title: 'Black Widgets',
      url: 'https://url',
      regularPrice: '100.00',
      salePrice: '100.00',
      image: `https://picsum.photos/600/400/?2`,
    });
    this.products.push({
      title: 'Black Widgets',
      url: 'https://url',
      regularPrice: '100.00',
      image: `https://picsum.photos/600/400/?3`,
    });
    this.products.push({
      title: 'Black Widgets',
      url: 'https://url',
      regularPrice: '100.00',
      image: `https://picsum.photos/600/400/?4`,
    });
    this.products2 = [];
    this.products2.push({
      title: 'Black Widgets',
      url: 'https://url',
      regularPrice: '100.00',
      image: `https://picsum.photos/600/400/?5`,
    });
    this.products2.push({
      title: 'Black Widgets',
      url: 'https://url',
      regularPrice: '100.00',
      image: `https://picsum.photos/600/400/?6`,
    });
    this.products2.push({
      title: 'Black Widgets',
      url: 'https://url',
      regularPrice: '100.00',
      image: `https://picsum.photos/600/400/?7`,
    });
    this.products2.push({
      title: 'Black Widgets',
      url: 'https://url',
      regularPrice: '100.00',
      image: `https://picsum.photos/600/400/?8`,
    });



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

  onStateChange(event) {
    this.ytEvent = event.data;
  }
  savePlayer(player) {
    this.player = player;
  }

  playVideo() {
    this.player.playVideo();
  }

  pauseVideo() {
    this.player.pauseVideo();
  }

  push() {
    this.avatars.push(
      {
        url: `https://picsum.photos/600/400/?${this.avatars.length + 1}`,
        title: `${this.avatars.length + 1}`
      }
    );
  }

  remove() {
    this.avatars.splice(this.avatars.length - 1, 1);
  }


  indexChanged(index) {
    console.log(index);
  }

  toggleDirection($event) {
    this.direction = this.directionToggle ? 'right' : 'left';
  }


}
