import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemComponent } from './product-item.component';
import { Product } from '../../../models/product';

describe('ProductItemComponent', () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductItemComponent],
    }).compileComponents();
    // FIXME: WRITE DUMMY OBJECT FOR TEST AND WHAT HAPPENS IF image URL Null??
    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
    component.product = getProduct();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

function getProduct(): Product {
  return {
    id: '1',
    name: 'Produkt 1',
    price: 19.99,
    description: 'Dies ist Produkt 1',
    imageUrl: 'bild1.jpg',
  };
}
