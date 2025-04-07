import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Product } from '../../types/Product';
import { ProductsService } from '../../services/products.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products', // Component selector for use in templates
  standalone: true, // Allows the component to work without being part of a module
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    RouterLink, // Enables router navigation in the template
    RouterOutlet, // Allows child routes to be displayed
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator; // Reference to the paginator component

  products: Product[] = []; // Stores all products
  paginatedProducts: Product[] = []; // Stores the products for the current page
  productCategory: string | null = ''; // Stores the selected category from query params

  pageSize = 5; // Default number of products per page

  constructor(
    private productsService: ProductsService, // Injects the product service
    private route: ActivatedRoute // Allows access to route parameters and query params
  ) {}

  ngOnInit() {
    this.loadProducts();

    // Listen for changes in query parameters (category selection)
    this.route.queryParamMap.subscribe((data) => {
      this.productCategory = data.get('category');
      this.loadProducts(); // Reload products based on selected category
    });
  }

  ngAfterViewInit() {
    // Ensure paginated products are updated after the view is initialized
    this.updatePaginatedProducts();
  }

  loadProducts() {
    // Fetch products based on category selection
    if (this.productCategory) {
      this.products = this.productsService.getProductsByCategory(this.productCategory);
    } else {
      this.products = this.productsService.getProducts();
    }
    this.updatePaginatedProducts(); // Update paginated list after fetching
  }

  onPageChange(event: any) {
    // Update pagination when user changes the page
    this.pageSize = event.pageSize;
    this.updatePaginatedProducts(event.pageIndex);
  }

  private updatePaginatedProducts(pageIndex = 0) {
    // Calculate the start and end index for pagination
    const startIndex = pageIndex * this.pageSize;
    this.paginatedProducts = this.products.slice(startIndex, startIndex + this.pageSize);
  }
}
