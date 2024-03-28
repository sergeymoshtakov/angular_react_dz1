import { Component } from '@angular/core';
import { deals } from '../deals';

@Component({
  selector: 'app-deals-destinations',
  templateUrl: './deals-destinations.component.html',
  styleUrl: './deals-destinations.component.css'
})
export class DealsDestinationsComponent {
  deals = deals;
}
