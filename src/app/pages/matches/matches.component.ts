import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})

export class MatchesComponent {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef | any;
  disableScrollDown = false
  matchList: any =[
    {
      id: 'MDA575165',
      name: 'V.G.Arthy',
      age: 32,
      ht: '5ft 2in/157cm',
      marriageStatus: 'Unmarried',
      address: 'chennai,Tamil Nadu,India',
      Prof: 'Software Professional',
      degree: 'B.Tech',
      status: 'Assisted',
      lastchatted: '2 wks ago',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGmUDlytmSKJqLXsQ9_5CBbeawRcs08QqM_QVOU_gluA&s'
    },
    {
      id: 'MDA5780616',
      name: 'Aksha',
      age: 33,
      ht: '5ft 2in/157cm',
      marriageStatus: 'Unmarried',
      address: 'chennai,Tamil Nadu,India',
      Prof: 'Software Professional',
      degree: 'B.Tech',
      status: 'Assisted',
      lastchatted: '2 wks ago',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGmUDlytmSKJqLXsQ9_5CBbeawRcs08QqM_QVOU_gluA&s'
    },
    {
      id: 'MDA5780616',
      name: 'Aksha',
      age: 33,
      ht: '5ft 2in/157cm',
      marriageStatus: 'Unmarried',
      address: 'chennai,Tamil Nadu,India',
      Prof: 'Software Professional',
      degree: 'B.Tech',
      status: 'Assisted',
      lastchatted: '2 wks ago',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGmUDlytmSKJqLXsQ9_5CBbeawRcs08QqM_QVOU_gluA&s'
    },
    {
      id: 'MDA5780616',
      name: 'Aksha',
      age: 33,
      ht: '5ft 2in/157cm',
      marriageStatus: 'Unmarried',
      address: 'chennai,Tamil Nadu,India',
      Prof: 'Software Professional',
      degree: 'B.Tech',
      status: 'Assisted',
      lastchatted: '2 wks ago',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGmUDlytmSKJqLXsQ9_5CBbeawRcs08QqM_QVOU_gluA&s'
    },
  ]

  constructor(public dataService : DataService) {
    
  }
  @HostListener('scroll', ['$event'])
  public onScroll() {
    let element = this.myScrollContainer.nativeElement
    let atBottom = element.scrollHeight - element.scrollTop === element.clientHeight;
    console.log('element', element, atBottom);
    
    if (this.disableScrollDown && atBottom) {
      this.dataService.emitValue(false);

        this.disableScrollDown = false
    } else {
      this.dataService.emitValue(true);

        this.disableScrollDown = true
    }
  }
}
