import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-match-card',
  templateUrl: './match-card.component.html',
  styleUrls: ['./match-card.component.scss']
})
export class MatchCardComponent {
  @Input() matchData!: any;

  getStatusTextColor(status: string): string {
    switch (status.toLowerCase()) {
      case 'assisted':
        return 'rgb(222, 220, 237)';
      case 'prime gold':
        return 'rgb(207,177,73)';
      default:
        return 'default-color';
    }
  }
}
