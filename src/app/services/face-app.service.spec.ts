import { TestBed } from '@angular/core/testing';

import { FaceAppService } from './face-app.service';

describe('FaceAppService', () => {
  let service: FaceAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaceAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
