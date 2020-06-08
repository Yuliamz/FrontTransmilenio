import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HorarioEditComponent } from './horario-edit.component';
import { HorarioService } from '../horario.service';

describe('HorarioEditComponent', () => {
  let component: HorarioEditComponent;
  let fixture: ComponentFixture<HorarioEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HorarioEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [HorarioService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorarioEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
