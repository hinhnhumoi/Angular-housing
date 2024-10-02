import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { CommonModule } from '@angular/common';
import { HousingService } from '../housing.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy{

  housingLocationList: HousingLocation[] = [];

  housingService: HousingService = inject(HousingService);

  filteredLocationList: HousingLocation[] = [];

  housingSubscription : Subscription | undefined;

  ngOnInit() {
    this.housingService.getAllHousingLocations().subscribe({
      next : (housingLocationList : HousingLocation[]) => {
        this.housingLocationList = housingLocationList;
        this.filteredLocationList = housingLocationList;
      }
    })
  }


  constructor() {
  }
  ngOnDestroy(): void {
    if(this.housingSubscription) {
      this.housingSubscription.unsubscribe();
    }
  }

  filterResults(text: string) {
    if(!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }

    this.filteredLocationList = this.housingLocationList.filter (
      (housingLocation) => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}
