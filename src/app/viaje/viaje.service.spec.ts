import { TestBed } from '@angular/core/testing';
import { ViajeService } from './viaje.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ViajeService', () => {
  let service: ViajeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ViajeService]
    });

    service = TestBed.get(ViajeService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
