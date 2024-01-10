import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute,ParamMap } from '@angular/router';
import { delay, map, of, switchMap } from 'rxjs';
import { DataService } from 'src/app/data.service';
import { MockData, SingleList } from 'src/app/shared/mockdata.interface';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})

export class MatchesComponent {
  @ViewChild('scrollMe') private myScrollContainer!: ElementRef<HTMLDivElement>;
  disableScrollDown = false;
  previousScrollHeight = 0;
  mockData!: MockData;
  defaultValue = {
    list: [],
    newUsers: 0
  }
  currentViewData: SingleList = this.defaultValue; 
  currentKey!: string;
  constructor(
    public dataService: DataService,
    private activeRoute: ActivatedRoute,
  ) {
    this.activeRoute.paramMap.subscribe((res: ParamMap) => {
      console.log(res.get('category'));
      this.currentKey = (res.get('category') as string);
      if (!this.mockData) {
        this.getMockDataInitial()
      } else {
        this.currentViewData = this.mockData[this.currentKey] || this.defaultValue
      }
    })
  }
  ngOnInit(): void {
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

  getMockDataInitial() {
    this.dataService.getMatchesDetails()
      .subscribe(
        (data: MockData) => {
          this.mockData = data;
          this.currentViewData = this.mockData[this.currentKey] || this.defaultValue
        }, (err: HttpErrorResponse) => {
          console.log('asdfasdfasd', err);
        })
  }
}
