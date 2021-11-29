import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetsOverviewComponent } from './tweets-overview.component';

describe('TweetsOverviewComponent', () => {
  let component: TweetsOverviewComponent;
  let fixture: ComponentFixture<TweetsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TweetsOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
