import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  
  @ViewChild('cover') cover: ElementRef;
  WAITLOADPAGE: string = "waitLoadPage";

  constructor() { }

  ngOnInit() {
    this.cover.nativeElement.classList.add(this.WAITLOADPAGE);
  }

  onLoad() {
    this.cover.nativeElement.classList.remove(this.WAITLOADPAGE);
  }
  
}
