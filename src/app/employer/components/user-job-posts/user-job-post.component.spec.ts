import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserJobPostComponent } from './user-job-post.component';

describe('UserJobPostComponent', () => {
  let component: UserJobPostComponent;
  let fixture: ComponentFixture<UserJobPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserJobPostComponent]
    });
    fixture = TestBed.createComponent(UserJobPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
