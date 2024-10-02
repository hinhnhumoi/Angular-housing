import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housinglocation';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [RouterModule, RouterLink, RouterOutlet],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.scss'
})
export class HousingLocationComponent {

  @Input() housingLocation!: HousingLocation;

}
