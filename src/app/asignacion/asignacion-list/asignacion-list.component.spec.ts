import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AsignacionListComponent } from './Asignacion-list.component';
import { AsignacionService } from '../Asignacion.service';

describe('AsignacionListComponent', () => {
  let component: AsignacionListComponent;
  let fixture: ComponentFixture<AsignacionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AsignacionListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [AsignacionService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
