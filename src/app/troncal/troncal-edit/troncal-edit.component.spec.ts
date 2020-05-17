import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TroncalEditComponent } from './troncal-edit.component';
import { TroncalService } from '../troncal.service';

describe('TroncalEditComponent', () => {
  let component: TroncalEditComponent;
  let fixture: ComponentFixture<TroncalEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TroncalEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [TroncalService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TroncalEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
