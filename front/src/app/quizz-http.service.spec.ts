import { TestBed, getTestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { QuizzHttpService } from './quizz-http.service';

describe('QuizzHttpService', () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;

  const dummyMap = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', fakeAsync(() => {
    const service: QuizzHttpService = TestBed.get(QuizzHttpService);
    const req = httpMock.expectOne(`http://localhost:3000/api/v1/quizz`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyMap);
    expect(service).toBeTruthy();
    tick();
    expect(service.map).toEqual(dummyMap);
  }));

  it('should test error 500', () => {
    const service: QuizzHttpService = TestBed.get(QuizzHttpService);
    const req = httpMock.expectOne(`http://localhost:3000/api/v1/quizz`);
    expect(req.request.method).toBe('GET');
    req.flush('', { status: 500, statusText: 'Internal error' });
    expect(service).toBeTruthy();
  });
});
