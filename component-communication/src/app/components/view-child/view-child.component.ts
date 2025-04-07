import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-view-child',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css'
})
export class ViewChildComponent {

  // images variable stores the data extracts from child component
  images: string[] = [];

  // @ViewChild() gets the full access on Child Component and stores in a variable 
  @ViewChild(ChildComponent) data !: ChildComponent;
  
  // ngAfterViewInit() access the child component data and stores in images variable
  ngAfterViewInit(){
    this.images = this.data.getImages();
  }
}
