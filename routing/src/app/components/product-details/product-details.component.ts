import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../../types/Product';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-product-details', // Defines the selector for the component
  standalone: true, // Allows the component to be used without being part of a module
  imports: [MatCardModule, MatButtonModule, MatIconModule], // Material components used in the template
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  product!: Product; // Stores the details of the selected product
  productId: number = 0; // Stores the product ID from the route

  constructor(
    private productsService: ProductsService, // Service to fetch product details
    private route: ActivatedRoute // Used to get the product ID from the route
  ) {}

  ngOnInit() {
    // Subscribe to route parameters to get the product ID
    this.route.params.subscribe((params: Params) => {
      this.productId = params['id']; // Extract ID from URL
      this.product = this.productsService.getProductById(this.productId); // Fetch product details
    });
  }
}
