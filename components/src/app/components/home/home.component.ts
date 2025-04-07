import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  // Below Data is used to render inside the browser using data-binding technique (String Interpolation)
  //  and structural directive (NgFor)
  employees: any[] = [
    { "id": 1, "name": 'Bhargav Mallik Ballani', "location": 'Cyberabad' },
    { "id": 2, "name": 'Girish Makam', "location": 'Cyberabad' },
    { "id": 3, "name": 'Pavan Vagicherla', "location": 'Hyderabad' }
  ];
}
