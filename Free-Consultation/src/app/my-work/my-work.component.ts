import { Component, Input, OnInit } from '@angular/core';


interface carouselImages {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.css']
})

export class MyWorkComponent implements OnInit {

  @Input() images: carouselImages[] = []
  @Input() controls = true;
  selectedIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

    onPrevClick(): void {
      if(this.selectedIndex === 0) {
        this.selectedIndex = this.images.length - 1;
      } else {
        this.selectedIndex--;
      }
    }

    onNextClick(): void {
      if(this.selectedIndex === this.images.length - 1) {
        this.selectedIndex =  0;
      } else {
        this.selectedIndex++;
      }
    }
  }




