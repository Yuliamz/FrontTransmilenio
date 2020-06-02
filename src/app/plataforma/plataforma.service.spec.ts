import { TestBed } from '@angular/core/testing';
import { PlataformaService } from './plataforma.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('PlataformaService', () => {
  let service: PlataformaService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlataformaService]
    });

    service = TestBed.get(PlataformaService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
