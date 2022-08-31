import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.css']
})

export class MyWorkComponent implements OnInit {

  public carouselImages = [
  'https://i.imgur.com/HGYW7Yo.jpg',
  'https://i.imgur.com/vr5isjY.jpg',
  'https://i.imgur.com/iaes63R.jpg',
  'https://i.imgur.com/RfiCtzC.jpg',
  'https://i.imgur.com/faNZcDd.jpg'
]
  constructor() { }

  ngOnInit(): void {

    const rightArrow = document.getElementById("left")
    const leftArrow = document.getElementById("right")
    

  }



}
