import { TestBed } from '@angular/core/testing';

import { BooksapiService } from './booksapi.service';

describe('BooksapiService', () => {
  let service: BooksapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
