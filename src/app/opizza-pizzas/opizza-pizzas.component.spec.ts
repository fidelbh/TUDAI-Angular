import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpizzaPizzasComponent } from './opizza-pizzas.component';

describe('OpizzaPizzasComponent', () => {
  let component: OpizzaPizzasComponent;
  let fixture: ComponentFixture<OpizzaPizzasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OpizzaPizzasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpizzaPizzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
