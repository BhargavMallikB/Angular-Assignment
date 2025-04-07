import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommunicationService } from '../../services/communication.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  
  heroQuotes: string[] = []; // stores heroes quotes in this, data gets from CommunicationService
  heroImages: string[] = []; // stores heroes ImagURls in this, data gets from CommunicationService

  // names will extract the data coming from Parent Component called Input using input() decorator and stores
  @Input() names: string[] = [];

  // hQuotes will create EventEmitter instance to emit data from here to Parent Component
  @Output() hQuotes = new EventEmitter<string[]>();

  constructor(private communicationService: CommunicationService){ // CommunicationService Dependency Injected
    this.heroQuotes = this.communicationService.getHeroQuotes(); // extracts & stors data from service
    this.heroImages = this.communicationService.getHeroImages(); // extracts & stores data from service
  }

  ngOnInit(){
    this.hQuotes.emit(this.heroQuotes); // this emits the data to Parent Component after compoent initialized
  }

  getImages(){ // getImages returns the heroes ImageURLs to the Parent Component
    return this.heroImages;
  }
}
