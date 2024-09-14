import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonumentiComponent } from './monumenti.component';

describe('MonumentiComponent', () => {
  let component: MonumentiComponent;
  let fixture: ComponentFixture<MonumentiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonumentiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonumentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
