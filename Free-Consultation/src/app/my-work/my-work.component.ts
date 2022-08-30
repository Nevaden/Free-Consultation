import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.css']
})

export class MyWorkComponent implements OnInit {

  public carouselImages = [
  'assets/image-slide-1.jpg',
  'assets/image-slide-2.jpg',
  'assets/image-slide-3.jpg',
  'assets/image-slide-4.jpg',
  'assets/image-slide-5.jpg'
]
  constructor() { }

  ngOnInit(): void {
  }



}
