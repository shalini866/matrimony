import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  defaultTabIndex = 0;
  unsubscribeEvent$: any;
  hideContent = true;


  constructor(private router: Router, public dataService: DataService) {
    this.unsubscribeEvent$ = this.dataService.getValue.subscribe((data: any) => {
      console.log('elementdata', data);
      this.hideContent = data;
    });

  }

  onTabChange(event: any) {
    this.router.navigate(['matches', 'match', 'joined']);
  }
  goToPrime(){
     this.router.navigate(['/prime'])
  }
  ngOnDestroy() {
    this.unsubscribeEvent$.unsubscribe();
  }
}
