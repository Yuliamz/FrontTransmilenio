import { TestBed } from '@angular/core/testing';
import { TipoService } from './tipo.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('TipoService', () => {
  let service: TipoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TipoService]
    });

    service = TestBed.get(TipoService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
