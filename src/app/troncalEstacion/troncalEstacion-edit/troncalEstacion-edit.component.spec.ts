import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TroncalEstacionEditComponent } from './troncalEstacion-edit.component';
import { TroncalEstacionService } from '../troncalEstacion.service';

describe('TroncalEstacionEditComponent', () => {
  let component: TroncalEstacionEditComponent;
  let fixture: ComponentFixture<TroncalEstacionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TroncalEstacionEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [TroncalEstacionService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TroncalEstacionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
