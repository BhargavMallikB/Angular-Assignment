import { Component } from '@angular/core';
import { Product } from '../../types/Product';
import { ProductsService } from '../../services/products.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home', // This component will be used as <app-home>
  standalone: true, // This means the component doesn't rely on any module
  imports: [MatCardModule, MatButtonModule, MatIconModule], // Material UI components used here
  templateUrl: './home.component.html', // HTML file for the component
  styleUrl: './home.component.css' // CSS file for styling
})
export class HomeComponent {
  
  products: Product[] = []; // Array to store products

  constructor(private productsService: ProductsService) {} // Injecting the service to fetch products

  ngOnInit() { 
    // Fetch products when the component loads
    this.products = this.productsService.getProducts();
  }
}
