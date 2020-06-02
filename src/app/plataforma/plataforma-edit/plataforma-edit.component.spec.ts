import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PlataformaEditComponent } from './plataforma-edit.component';
import { PlataformaService } from '../plataforma.service';

describe('PlataformaEditComponent', () => {
  let component: PlataformaEditComponent;
  let fixture: ComponentFixture<PlataformaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlataformaEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [PlataformaService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlataformaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
