import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'simple-traffic';
  pickedValue: string;
  sliderValue: string;
  sliderCustomValues: string[];
  calculations: string;
  isDiscounted: boolean;
  isOpened: boolean;

  sliderValueChange($event?: any) {
    this.pickedValue = this.sliderCustomValues[$event.target.value]; // $event.target.value is the index of the selected value

    interval(200).subscribe(() => {
      switch (this.pickedValue) {
        case '10K':
          if (this.isDiscounted) {
            this.calculations = '6';
          } else {
            this.calculations = '8';
          }
          break;
        case '50K':
          if (this.isDiscounted) {
            this.calculations = '9';
          } else {
            this.calculations = '12';
          }
          break;
        case '100K':
          if (this.isDiscounted) {
            this.calculations = '12';
          } else {
            this.calculations = '16';
          }
          break;
        case '500K':
          if (this.isDiscounted) {
            this.calculations = '18';
          } else {
            this.calculations = '24';
          }
          break;
        case '1M':
          if (this.isDiscounted) {
            this.calculations = '27';
          } else {
            this.calculations = '36';
          }
      }
    });
  }
  discountApplied() {
    this.isDiscounted = !this.isDiscounted;
  }
  openModal() {
    this.isOpened = !this.isOpened;
  }

  constructor() {
    this.sliderCustomValues = ['10K', '50K', '100K', '500K', '1M'];
    this.pickedValue = '100K';
    this.calculations = '16';
    this.isDiscounted = false;
    this.isOpened = false
  }
}
