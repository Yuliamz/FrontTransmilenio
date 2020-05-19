import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EstacionEditComponent } from './estacion-edit.component';
import { EstacionService } from '../estacion.service';

describe('EstacionEditComponent', () => {
  let component: EstacionEditComponent;
  let fixture: ComponentFixture<EstacionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EstacionEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [EstacionService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstacionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
