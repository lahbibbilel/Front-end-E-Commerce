import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdTestComponent } from './prod-test.component';

describe('ProdTestComponent', () => {
  let component: ProdTestComponent;
  let fixture: ComponentFixture<ProdTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
