import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateServerComponent } from './update-server.component';

describe('UpdateServerComponent', () => {
  let component: UpdateServerComponent;
  let fixture: ComponentFixture<UpdateServerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateServerComponent]
    });
    fixture = TestBed.createComponent(UpdateServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
