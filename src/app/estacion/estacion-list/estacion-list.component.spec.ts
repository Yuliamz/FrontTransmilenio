import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EstacionListComponent } from './Estacion-list.component';
import { EstacionService } from '../Estacion.service';

describe('EstacionListComponent', () => {
  let component: EstacionListComponent;
  let fixture: ComponentFixture<EstacionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EstacionListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [EstacionService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstacionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
