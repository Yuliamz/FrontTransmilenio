import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TroncalEstacionListComponent } from './TroncalEstacion-list.component';
import { TroncalEstacionService } from '../TroncalEstacion.service';

describe('TroncalEstacionListComponent', () => {
  let component: TroncalEstacionListComponent;
  let fixture: ComponentFixture<TroncalEstacionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TroncalEstacionListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [TroncalEstacionService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TroncalEstacionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
