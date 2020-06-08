import { TestBed } from '@angular/core/testing';
import { ParadaService } from './parada.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ParadaService', () => {
  let service: ParadaService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ParadaService]
    });

    service = TestBed.get(ParadaService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
