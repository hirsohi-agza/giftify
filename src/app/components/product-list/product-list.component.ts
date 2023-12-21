import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { Observable, Subscription } from 'rxjs';
import { Product } from '../../models/product';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ProductItemComponent } from './product-item/product-item.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'gift-product-list',
  standalone: true,
  imports: [AsyncPipe, ProductItemComponent, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements OnInit, OnDestroy {
  @Input({ required: true }) shortView!: boolean;

  products$?: Observable<Product[]>;
  isSmartphoneScreen = false;

  private cdRef = inject(ChangeDetectorRef);
  private productService = inject(ProductService);
  private breakpointObserver = inject(BreakpointObserver);
  private subscription: Subscription = new Subscription();

  ngOnInit() {
    this.products$ = this.productService.getProducts();

    //FIXME: REACT ON CHANGE SCREEN SIZE landscape or portrait
    // BREAKPOINT CAN REACT OF landscape and portrait
    this.subscription = this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .subscribe((result) => {
        this.isSmartphoneScreen = result.matches;
        this.cdRef.detectChanges();
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
