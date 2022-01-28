import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTweetDialogueComponent } from './add-tweet-dialogue.component';

describe('AddTweetDialogueComponent', () => {
  let component: AddTweetDialogueComponent;
  let fixture: ComponentFixture<AddTweetDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTweetDialogueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTweetDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
