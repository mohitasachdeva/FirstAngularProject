import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello From Bridgelaps';
  imgUrl = '../assets/Images/download (1).jpg'
  url="https://www.bridgelabz.com/"
  onClick($event:any){
    console.log("Button is clicked",$event);
    window.open(this.url,"blank");
  }
  showUrl($event:any){
    console.log(this.imgUrl)
  }
}
