import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpizzaAboutComponent } from './opizza-about.component';

describe('OpizzaAboutComponent', () => {
  let component: OpizzaAboutComponent;
  let fixture: ComponentFixture<OpizzaAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OpizzaAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpizzaAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
