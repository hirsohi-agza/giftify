import { inject, Injectable } from '@angular/core';
import { ProductBackendService } from './product-backend.service';
import { Product } from '../../models/product';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productBackendService = inject(ProductBackendService);

  getProducts(): Observable<Product[]> {
    return this.productBackendService.generateDummyProducts(20).pipe(
      catchError((error) => {
        console.error('Es gab einen Fehler beim Abrufen der Produkte', error);
        return [];
      }),
    );
  }
}
