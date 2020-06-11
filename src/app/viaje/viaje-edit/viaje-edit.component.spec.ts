import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ViajeEditComponent } from './viaje-edit.component';
import { ViajeService } from '../viaje.service';

describe('ViajeEditComponent', () => {
  let component: ViajeEditComponent;
  let fixture: ComponentFixture<ViajeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViajeEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [ViajeService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViajeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
