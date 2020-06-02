import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PlataformaListComponent } from './Plataforma-list.component';
import { PlataformaService } from '../Plataforma.service';

describe('PlataformaListComponent', () => {
  let component: PlataformaListComponent;
  let fixture: ComponentFixture<PlataformaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlataformaListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [PlataformaService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlataformaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
