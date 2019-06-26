import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendRecieveMessageComponent } from './send-recieve-message.component';

describe('SendRecieveMessageComponent', () => {
  let component: SendRecieveMessageComponent;
  let fixture: ComponentFixture<SendRecieveMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendRecieveMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendRecieveMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
