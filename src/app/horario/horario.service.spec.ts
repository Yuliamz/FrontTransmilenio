import { TestBed } from '@angular/core/testing';
import { HorarioService } from './horario.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('HorarioService', () => {
  let service: HorarioService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HorarioService]
    });

    service = TestBed.get(HorarioService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
