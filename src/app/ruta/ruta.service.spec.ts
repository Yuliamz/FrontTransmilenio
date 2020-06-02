import { TestBed } from '@angular/core/testing';
import { RutaService } from './ruta.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('RutaService', () => {
  let service: RutaService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RutaService]
    });

    service = TestBed.get(RutaService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
