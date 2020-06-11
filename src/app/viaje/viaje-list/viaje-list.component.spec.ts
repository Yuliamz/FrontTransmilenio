import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ViajeListComponent } from './Viaje-list.component';
import { ViajeService } from '../Viaje.service';

describe('ViajeListComponent', () => {
  let component: ViajeListComponent;
  let fixture: ComponentFixture<ViajeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViajeListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [ViajeService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViajeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
