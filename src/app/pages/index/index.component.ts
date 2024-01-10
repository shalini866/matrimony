import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Nav, Navs } from 'src/app/shared/mockdata.interface';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  navLinks: Navs = [
    {
      id: 1,
      name: 'Just Joined',
      link: 'justJoined',
    },
    {
      id: 2,
      name: 'Matches',
      link: 'matches',
    },
    {
      id: 3,
      name: 'Premium',
      link: 'premium',
    },
    {
      id: 4,
      name: 'Mutual',
      link: 'mutual',
    }
  ]
  activeLink = 1;
  unsubscribeEvent$: any;
  hideContent = true;


  constructor(
    private router: Router,
    public dataService: DataService
  ) {
    this.unsubscribeEvent$ = this.dataService.getValue.subscribe((data: any) => {
      this.hideContent = data;
    });

  }

  onTabChange(event: Nav) {
    this.router.navigate(['matches', 'match', event.link]);
  }
  goToPrime() {
    this.router.navigate(['/prime'])
  }
  ngOnDestroy() {
    this.unsubscribeEvent$.unsubscribe();
  }
}
