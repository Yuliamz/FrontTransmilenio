import { TestBed } from '@angular/core/testing';
import { BusService } from './bus.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('BusService', () => {
  let service: BusService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BusService]
    });

    service = TestBed.get(BusService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
