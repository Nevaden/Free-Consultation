import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Free-Consultation';

  images = [
    {
    imageSrc: 'https://i.imgur.com/HGYW7Yo.jpg',
    imageAlt:'Carousel1'},
    {
    imageSrc:'https://i.imgur.com/vr5isjY.jpg',
    imageAlt: 'Carousel2'},
    {
    imageSrc:'https://i.imgur.com/iaes63R.jpg',
    imageAlt: 'Carousel2'},
    {
    imageSrc:'https://i.imgur.com/RfiCtzC.jpg',
    imageAlt: 'Carousel2'},
    {
    imageSrc:'https://i.imgur.com/faNZcDd.jpg',
    imageAlt: 'Carousel2'},

  ]
}
