import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { AuthGuardService } from './services/guards/auth-guard.service';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'products/product-details/:id',
    component: ProductDetailsComponent,
    canActivate: [AuthGuardService],
  },
];
