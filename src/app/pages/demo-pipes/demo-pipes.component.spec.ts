import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoPipesComponent } from './demo-pipes.component';

describe('DemoPipesComponent', () => {
  let component: DemoPipesComponent;
  let fixture: ComponentFixture<DemoPipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoPipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
