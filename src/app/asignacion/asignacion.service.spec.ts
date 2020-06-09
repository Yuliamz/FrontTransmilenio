import { TestBed } from '@angular/core/testing';
import { AsignacionService } from './asignacion.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('AsignacionService', () => {
  let service: AsignacionService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AsignacionService]
    });

    service = TestBed.get(AsignacionService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
