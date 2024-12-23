import { TestBed } from '@angular/core/testing';

import { FtProjectsService } from './ft-projects.service';

describe('FtProjectsService', () => {
  let service: FtProjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FtProjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
