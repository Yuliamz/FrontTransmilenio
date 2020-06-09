import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AsignacionEditComponent } from './asignacion-edit.component';
import { AsignacionService } from '../asignacion.service';

describe('AsignacionEditComponent', () => {
  let component: AsignacionEditComponent;
  let fixture: ComponentFixture<AsignacionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AsignacionEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [AsignacionService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
