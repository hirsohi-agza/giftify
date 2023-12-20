import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Product } from '../../../models/product';
import { MatCardModule } from '@angular/material/card';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'gift-product-item',
  standalone: true,
  imports: [MatCardModule, NgOptimizedImage],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductItemComponent {
  @Input({ required: true }) product!: Product;
}
