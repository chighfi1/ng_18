import { TestBed } from '@angular/core/testing';

import { JellyFormService } from './jelly-form.service';

describe('JellyFormService', () => {
  let service: JellyFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JellyFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
