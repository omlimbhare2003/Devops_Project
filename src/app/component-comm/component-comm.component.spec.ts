import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCommComponent } from './component-comm.component';

describe('ComponentCommComponent', () => {
  let component: ComponentCommComponent;
  let fixture: ComponentFixture<ComponentCommComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentCommComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentCommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
