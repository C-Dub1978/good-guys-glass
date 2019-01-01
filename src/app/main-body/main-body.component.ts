import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent implements OnInit {
  navLinks: any;

  constructor() {}

  ngOnInit() {
    this.navLinks = [
      { text: 'Home', link: 'home' },
      { text: 'About Us', link: 'about' },
      { text: 'Services', link: 'services' },
      { text: 'Request a Quote', link: 'quote' },
      { text: 'Windshield Safety', link: 'safety' },
      { text: 'Five Things to Know', link: 'five-things' },
      { text: 'FAQ', link: 'faq' }
    ];
  }
}
