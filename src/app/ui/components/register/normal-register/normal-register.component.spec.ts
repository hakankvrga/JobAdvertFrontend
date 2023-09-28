import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalRegisterComponent } from './normal-register.component';

describe('NormalRegisterComponent', () => {
  let component: NormalRegisterComponent;
  let fixture: ComponentFixture<NormalRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NormalRegisterComponent]
    });
    fixture = TestBed.createComponent(NormalRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
