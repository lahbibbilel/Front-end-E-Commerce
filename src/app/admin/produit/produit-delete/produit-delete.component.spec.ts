import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitDeleteComponent } from './produit-delete.component';

describe('ProduitDeleteComponent', () => {
  let component: ProduitDeleteComponent;
  let fixture: ComponentFixture<ProduitDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduitDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
