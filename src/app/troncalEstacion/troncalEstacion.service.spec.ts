import { TestBed } from '@angular/core/testing';
import { TroncalEstacionService } from './troncalEstacion.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('TroncalEstacionService', () => {
  let service: TroncalEstacionService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TroncalEstacionService]
    });

    service = TestBed.get(TroncalEstacionService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
