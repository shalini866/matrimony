import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})

export class MatchesComponent {
  @ViewChild('scrollMe') private myScrollContainer!: ElementRef<HTMLDivElement>;
  disableScrollDown = false;
  previousScrollHeight = 0;
  matchList :any 
  // matchList: any = [
  //   {
  //     "id": "MDA575165",
  //     "name": "V.G.Arthy",
  //     "age": 32,
  //     "ht": "5ft 2in/157cm",
  //     "marriageStatus": "Unmarried",
  //     "address": "chennai,Tamil Nadu,India",
  //     "Prof": "Software Professional",
  //     "degree": "B.Tech",
  //     "memberShipStatus": { prime: false, assisted: true, show: true },
  //     "color": "rgb(222,220,237)",
  //     "lastchatted": "2 wks ago",
  //     "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGmUDlytmSKJqLXsQ9_5CBbeawRcs08QqM_QVOU_gluA&s"
  //   },
  //   {
  //     "id": "MDA575177",
  //     "name": "V.G.Vijaya",
  //     "age": 30,
  //     "ht": "4ft 2in/157cm",
  //     "marriageStatus": "Unmarried",
  //     "address": "MUmbai, Tamil Nadu, India",
  //     "Prof": "Software Professional",
  //     "degree": "B.Com",
  //     "memberShipStatus": { prime: true, assisted: false, show: true },
  //     "color": "rgb(205,180,130)",
  //     "lastchatted": "2 wks ago",
  //     "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpnkqJFiYqNMtugvngQh1nHUGz5kH8MpsR7g&usqp=CAU"

  //   },
  //   {
  //     "id": "MDA5780616",
  //     "name": "Arathi",
  //     "age": 20,
  //     "ht": "6ft 2in/160cm",
  //     "marriageStatus": "Unmarried",
  //     "address": "P, Tamil Nadu, India",
  //     "Prof": "Software Professional",
  //     "degree": "B.Tech",
  //     "memberShipStatus": { prime: false, assisted: true, show: false },
  //     "color": "rgb(222,220,237)",
  //     "lastchatted": "1 wks ago",
  //     "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJoB8Po6K-M-TOlfwLkXedLRKr4822u0md-A&usqp=CAU"
  //   },
  //   {
  //     "id": "MDA123456",
  //     "name": "Siddharth Sharma",
  //     "age": 28,
  //     "ht": "5ft 8in/173cm",
  //     "marriageStatus": "Single",
  //     "address": "Delhi, India",
  //     "Prof": "Marketing Executive",
  //     "degree": "MBA",
  //     "memberShipStatus": { prime: false, assisted: true, show: true },
  //     "color": "rgb(205,180,130)",
  //     "lastchatted": "3 hrs ago",
  //     "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhoEFAoEuRsZBF-e7Ap9qb6O4gEwcoA1Wygx0S032KYOI_AOPhjUmAhuT7EKIDsO_OFr4&usqp=CAU"
  //   },
  //   {
  //     "id": "MDA789012",
  //     "name": "Priya Patel",
  //     "age": 30,
  //     "ht": "5ft 5in/165cm",
  //     "marriageStatus": "Divorced",
  //     "address": "Mumbai, Maharashtra, India",
  //     "Prof": "Journalist",
  //     "degree": "BA",
  //     "memberShipStatus": { prime: false, assisted: true, show: true },
  //     "color": "rgb(222,220,237)",
  //     "lastchatted": "1 wks ago",
  //     "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCQbhqnO1BxbupHb8dz3v3urTOSndHr-oB1g&usqp=CAU"
  //   },
  //   {
  //     "id": "MDA345678",
  //     "name": "Rajiv Kumar",
  //     "age": 35,
  //     "ht": "5ft 10in/178cm",
  //     "marriageStatus": "Married",
  //     "address": "Kolkata, West Bengal, India",
  //     "Prof": "Software Engineer",
  //     "degree": "B.Tech",
  //     "memberShipStatus": { prime: false, assisted: true, show: true },
  //     "color": "rgb(222,220,237)",
  //     "lastchatted": "1 month ago",
  //     "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsAAOkS4PFkJXqNlJii6aEiDZbe8hLuQtBSmm5bWX0wYMCspwdO5GOrDWbRyoQhADsnLg&usqp=CAU"
  //   },
  //   {
  //     "id": "MDA901234",
  //     "name": "Ananya Singh",
  //     "age": 27,
  //     "ht": "5ft 4in/163cm",
  //     "marriageStatus": "Single",
  //     "address": "Bangalore, Karnataka, India",
  //     "Prof": "Doctor",
  //     "degree": "MBBS",
  //     "memberShipStatus": { prime: false, assisted: true, show: true },
  //     "color": "rgb(205,180,130)",
  //     "lastchatted": "4 hrs ago",
  //     "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2EJKUEQSGznzv42gDFxAt8Q969KvLR6wN_A&usqp=CAU"
  //   },
  //   {
  //     "id": "MDA567890",
  //     "name": "Rahul Mehta",
  //     "age": 40,
  //     "ht": "5ft 9in/175cm",
  //     "marriageStatus": "Widowed",
  //     "address": "Jaipur, Rajasthan, India",
  //     "Prof": "Architect",
  //     "degree": "B.Arch",
  //     "memberShipStatus": { prime: false, assisted: true, show: true },
  //     "color": "rgb(222,220,237)",
  //     "lastchatted": "5 days ago",
  //     "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMjtQBov56OAJ7YJUmTUfeYpvVau2zgDkCyA&usqp=CAU"
  //   },
  //   {
  //     "id": "MDA678901",
  //     "name": "Kirti Desai",
  //     "age": 29,
  //     "ht": "5ft 6in/168cm",
  //     "marriageStatus": "Single",
  //     "address": "Ahmedabad, Gujarat, India",
  //     "Prof": "Graphic Designer",
  //     "degree": "BFA",
  //     "memberShipStatus": { prime: false, assisted: true, show: true },
  //     "color": "rgb(205,180,130)",
  //     "lastchatted": "52 mins ago",
  //     "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEpvzYvzFb44Qp6i9UEzuul1PB-NLF98njmg&usqp=CAU"
  //   },
  //   {
  //     "id": "MDA234567",
  //     "name": "Amit Patel",
  //     "age": 31,
  //     "ht": "6ft 0in/183cm",
  //     "marriageStatus": "Single",
  //     "address": "Hyderabad, Telangana, India",
  //     "Prof": "Engineer",
  //     "degree": "M.Tech",
  //     "memberShipStatus": { prime: false, assisted: true, show: true },
  //     "color": "rgb(222,220,237)",
  //     "lastchatted": "1 wks ago",
  //     "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuvtnZtdlSeudxLlNQuXoEMBwIHzJqOGiIrQ&usqp=CAU"
  //   },
  //   {
  //     "id": "MDA3456789",
  //     "name": "Neha Gupta",
  //     "age": 26,
  //     "ht": "5ft 7in/170cm",
  //     "marriageStatus": "Single",
  //     "address": "Pune, Maharashtra, India",
  //     "Prof": "Software Developer",
  //     "degree": "B.Tech",
  //     "memberShipStatus": { prime: false, assisted: true, show: true },
  //     "color": "rgb(222,220,237)",
  //     "lastchatted": "32 mins ago",
  //     "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNNRqKoghIDo3Vefq59_pyxm3TMTFnMYzOzg&usqp=CAU"
  //   }
  // ]

  constructor(public dataService: DataService) {

  }
  ngOnInit(): void {
    this.dataService.getMatchesDetails().subscribe((data)=>{
     console.log('data',data)
    })
      
    
  }
  
  @HostListener('scroll', ['$event'])
  public onScroll() {
    let scrollTop = this.myScrollContainer.nativeElement.scrollTop
    if (scrollTop > this.previousScrollHeight) {
      this.dataService.emitValue(false);

      this.disableScrollDown = false
    } else {
      this.dataService.emitValue(true);

      this.disableScrollDown = true
    }
    this.previousScrollHeight = scrollTop;
  }
}


// (data) => {
//   this.matchList = data;
//   console.log('this.matchlist',data)
// },
// (error) => {
//   console.error('Error fetching match details:', error);
// }