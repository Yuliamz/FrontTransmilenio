import { TestBed } from '@angular/core/testing';
import { TroncalService } from './troncal.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('TroncalService', () => {
  let service: TroncalService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TroncalService]
    });

    service = TestBed.get(TroncalService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
