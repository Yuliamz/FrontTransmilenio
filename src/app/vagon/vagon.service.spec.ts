import { TestBed } from '@angular/core/testing';
import { VagonService } from './vagon.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('VagonService', () => {
  let service: VagonService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VagonService]
    });

    service = TestBed.get(VagonService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
