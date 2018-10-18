import { Component, OnInit } from '@angular/core';
import { CurLocation } from '../app/CurLocation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  CurLocation: CurLocation;
  logData: any[] = ['1', '2', '3', '4'];
  name = 'Ted';
  Desc = 'AAABBBCCCDDD';
  msg = 'IN';
  num = (3.2 * 10 * 6) / 10;
  lat = 24.1504536;
  lng = 120.68325279999999;
  zoomValue = 15;
  iconUrl = 'http://i.imgur.com/0TctIfY.png';
  isOpen = false;
  showFiller = true;
  InputMsg = '';
  constructor() {}
  ngOnInit() {
    this.showLocation();
  }

  markerClick(e) {
    console.log(e);
    e.open();
    this.isOpen = true;
  }
  call(name: any) {
    alert('Oops!!' + name);
  }
  over() {
    this.msg = 'IN';
    this.isOpen = true;
  }
  leave() {
    this.msg = 'LEAVE';
    this.isOpen = false;
  }
  MsgSend(Msg: any) {
    alert(Msg);
  }
  Send() {
    this.logData[this.logData.length] = this.InputMsg;
    this.InputMsg = '';
  }
  showLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        console.log('latitude =' + this.lat + 'longitude = ' + this.lng);
      });
    }
  }
}
