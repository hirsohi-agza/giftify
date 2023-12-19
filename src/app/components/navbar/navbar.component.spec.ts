import { NavbarComponent } from './navbar.component';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(waitForAsync(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent], // NavbarComponent wird hier importiert
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should access template elements', () => {
    const navbarElement = fixture.nativeElement.querySelector('.mat-toolbar');
    expect(navbarElement).toBeTruthy();
  });
});
