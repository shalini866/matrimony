import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-prime-page',
  templateUrl: './prime-page.component.html',
  styleUrls: ['./prime-page.component.scss']
})
export class PrimePageComponent implements OnInit {

  lists = [
    '100% ID verified, high-quality profiles',
    'Matches with photos and complete information',
    'The Finest and most trustworthy profiles to choose from'
  ]
  bottomContentLists = [
    {
      title: 'Add Your Photo to join the exclusive club',
      buttonText: 'Upload Photo'
    },
    {
      title: 'Verify you profile with ID proof',
      buttonText: 'Upload ID Proof'
    }
  ]
  constructor(private router: Router,
    private _location: Location) {

  }
  ngOnInit(): void {
    console.log('check')
  }

  backClicked() {
    this._location.back();
  }
}
