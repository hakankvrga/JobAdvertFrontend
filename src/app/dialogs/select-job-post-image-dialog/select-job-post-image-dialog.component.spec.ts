import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectJobPostImageDialogComponent } from './select-job-post-image-dialog.component';

describe('SelectJobPostImageDialogComponent', () => {
  let component: SelectJobPostImageDialogComponent;
  let fixture: ComponentFixture<SelectJobPostImageDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectJobPostImageDialogComponent]
    });
    fixture = TestBed.createComponent(SelectJobPostImageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
