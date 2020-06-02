import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RutaListComponent } from './Ruta-list.component';
import { RutaService } from '../Ruta.service';

describe('RutaListComponent', () => {
  let component: RutaListComponent;
  let fixture: ComponentFixture<RutaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RutaListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [RutaService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
