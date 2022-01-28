import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBioDialogueComponent } from './edit-bio-dialogue.component';

describe('EditBioDialogueComponent', () => {
  let component: EditBioDialogueComponent;
  let fixture: ComponentFixture<EditBioDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBioDialogueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBioDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
