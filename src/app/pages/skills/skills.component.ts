import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig, NgbSlide, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { CvService } from '../../services/cv.service';
import { PrimeNGConfig } from 'primeng/api';
import { Titles } from '../../interfaces/titles.interface';
import { Software } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  
  products : Software [] = [];
  responsiveOptions : any;
  menu! : Titles;
  constructor( private CvService: CvService,
               public _conf : NgbCarouselConfig,
               private primengConfig: PrimeNGConfig,
               private producService: CvService
                ) { 

    this.getMenu()

    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

  ngOnInit(): void {
    // this._conf.showNavigationIndicators = false
    // this._conf.showNavigationArrows = false
    // this._conf.keyboard = false;
    // this._conf.wrap = false;
    
    this.CvService.lenguaje$.subscribe(resp=>{
      this.getMenu()
    })
    this.primengConfig.ripple = true;

    this.producService.getSoftSkills()
    .subscribe(resp=>{
      this.products = resp
    })

    // this.producService.getProductsSmall().then(products => {
		// 	this.products = products;
		// });
    
  }

  getMenu(){
    this.CvService.getMenu()
    .subscribe(resp=>{
      this.menu = resp
    })
  }

}
