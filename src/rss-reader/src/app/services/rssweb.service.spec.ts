import { TestBed } from '@angular/core/testing';

import { RsswebService } from './rssweb.service';

describe('RsswebService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RsswebService = TestBed.get(RsswebService);
    expect(service).toBeTruthy();
  });
});
