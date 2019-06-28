import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleI18nComponent } from './sample-i18n.component';

describe('SampleI18nComponent', () => {
  let component: SampleI18nComponent;
  let fixture: ComponentFixture<SampleI18nComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleI18nComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleI18nComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
