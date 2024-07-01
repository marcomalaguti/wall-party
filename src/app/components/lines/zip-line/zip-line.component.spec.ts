import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipLineComponent } from './zip-line.component';

describe('ZipLineComponent', () => {
  let component: ZipLineComponent;
  let fixture: ComponentFixture<ZipLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZipLineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZipLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
