import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RutaEditComponent } from './ruta-edit.component';
import { RutaService } from '../ruta.service';

describe('RutaEditComponent', () => {
  let component: RutaEditComponent;
  let fixture: ComponentFixture<RutaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RutaEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [RutaService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
