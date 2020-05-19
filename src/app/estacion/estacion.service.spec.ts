import { TestBed } from '@angular/core/testing';
import { EstacionService } from './estacion.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('EstacionService', () => {
  let service: EstacionService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EstacionService]
    });

    service = TestBed.get(EstacionService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
