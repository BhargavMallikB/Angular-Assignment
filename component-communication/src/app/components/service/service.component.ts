import { Component } from '@angular/core';
import { CommunicationService } from '../../services/communication.service';
import { Hero } from '../../types/Hero';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {

  avengers: Hero[] = []; // avengers stores the heroes data coming from CommunicationService

  service: any; //

  constructor(private communicationService: CommunicationService){} // CommunicationService Dependency Injected

  ngOnInit(){
    this.avengers = this.communicationService.getHeroes(); // avengers stores the data extracts from CommunicationService
    
  }

  updateAvengersStatus(hero: {title: string, quote: string, imageURL: string, isActive: boolean}){
    hero.isActive = !hero.isActive; // It changes the particular hero status to active or deactive
  }
}
