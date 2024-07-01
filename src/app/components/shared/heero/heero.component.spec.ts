import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeeroComponent } from './heero.component';

describe('HeeroComponent', () => {
  let component: HeeroComponent;
  let fixture: ComponentFixture<HeeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
