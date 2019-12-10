import { TestBed } from '@angular/core/testing';

import { MyappLibService } from './myapp-lib.service';

describe('MyappLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyappLibService = TestBed.get(MyappLibService);
    expect(service).toBeTruthy();
  });
});
