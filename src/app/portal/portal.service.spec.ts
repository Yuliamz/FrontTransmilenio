import { TestBed } from '@angular/core/testing';
import { PortalService } from './portal.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('PortalService', () => {
  let service: PortalService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PortalService]
    });

    service = TestBed.get(PortalService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
