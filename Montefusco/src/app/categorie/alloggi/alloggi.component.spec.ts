import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlloggiComponent } from './alloggi.component';

describe('AlloggiComponent', () => {
  let component: AlloggiComponent;
  let fixture: ComponentFixture<AlloggiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlloggiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlloggiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
