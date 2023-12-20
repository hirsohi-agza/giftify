import { Product } from '../../models/product';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductBackendService {
  generateDummyProducts(count: number): Observable<Product[]> {
    const products: Product[] = [];
    for (let i = 0; i < count; i++) {
      products.push({
        id: `prod-${i}`,
        name: `Product ${i}`,
        price: Math.floor(Math.random() * 100),
        description: `Description for Product ${i}`,
        imageUrl: `http://example.com/prod-${i}.jpg`,
      });
    }
    return of(products);
  }
}
