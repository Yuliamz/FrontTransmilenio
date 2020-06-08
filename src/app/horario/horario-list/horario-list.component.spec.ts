import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HorarioListComponent } from './horario-list.component';
import { HorarioService } from '../horario.service';

describe('HorarioListComponent', () => {
  let component: HorarioListComponent;
  let fixture: ComponentFixture<HorarioListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HorarioListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [HorarioService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorarioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
