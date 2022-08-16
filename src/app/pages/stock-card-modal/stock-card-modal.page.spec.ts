import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StockCardModalPage } from './stock-card-modal.page';

describe('StockCardModalPage', () => {
  let component: StockCardModalPage;
  let fixture: ComponentFixture<StockCardModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockCardModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StockCardModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
