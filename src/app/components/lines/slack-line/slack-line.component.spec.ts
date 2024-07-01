import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlackLineComponent } from './slack-line.component';

describe('SlackLineComponent', () => {
  let component: SlackLineComponent;
  let fixture: ComponentFixture<SlackLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlackLineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlackLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
