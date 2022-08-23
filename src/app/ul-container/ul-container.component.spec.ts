import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UlContainerComponent } from './ul-container.component';

describe('UlContainerComponent', () => {
  let component: UlContainerComponent;
  let fixture: ComponentFixture<UlContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UlContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UlContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
