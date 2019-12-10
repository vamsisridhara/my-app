import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyappLibComponent } from './myapp-lib.component';

describe('MyappLibComponent', () => {
  let component: MyappLibComponent;
  let fixture: ComponentFixture<MyappLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyappLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyappLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
