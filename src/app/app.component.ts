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
    console.log("Image is clicked",$event);
      window.open(this.url,"blank");
  }



  userName: string="";
  nameError: string="";
  onInput($event:any){
    console.log("Change event occured",$event.data)
    const nameRegex=RegExp('^[A-Z]{1}[a-z]{2,}');
  if(nameRegex.test(this.userName))
  {
    this.nameError="";
    return;
  }
  this.nameError="Name is Incorrect!"
  }
}

