import { TestBed } from '@angular/core/testing';

import { Posts.ServiceService } from './posts.service.service';

describe('Posts.ServiceService', () => {
  let service: Posts.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Posts.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
