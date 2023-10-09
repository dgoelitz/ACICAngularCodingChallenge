import { Component, OnInit } from '@angular/core';

import { LineOfBusiness } from '../LineOfBusiness';
import { LineOfBusinessService } from '../lineOfBusiness.service';

@Component({
  selector: 'app-mostQuoted',
  templateUrl: './mostQuoted.component.html'
})
export class MostQuotedComponent implements OnInit {
  isLoaded = false;
  linesOfBusiness: LineOfBusiness[] = [];

  constructor(private lineOfBusinessService: LineOfBusinessService) { } 

  ngOnInit() {
    this.getLinesOfBusiness();
  }

  private getLinesOfBusiness(): void {
    this.lineOfBusinessService.getLinesOfBusiness()
    .subscribe(linesOfBusiness => {
      this.linesOfBusiness = linesOfBusiness;
      this.sortLinesByMostQuoted();
      this.isLoaded = true;
    });
  }

  private sortLinesByMostQuoted(): void {
    this.linesOfBusiness.sort((a, b) => b.recentQuotes - a.recentQuotes);
  }
}
