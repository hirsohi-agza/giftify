import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  OnInit,
} from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ProductItemComponent } from './product-item/product-item.component';

@Component({
  selector: 'gift-product-list',
  standalone: true,
  imports: [AsyncPipe, ProductItemComponent, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements OnInit {
  @Input({ required: true }) shortView!: boolean;
  products$?: Observable<Product[]>;
  private productService = inject(ProductService);

  ngOnInit() {
    this.products$ = this.productService.getProducts();
  }
}
