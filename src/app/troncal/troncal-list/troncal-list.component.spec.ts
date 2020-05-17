import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TroncalListComponent } from './troncal-list.component';
import { TroncalService } from '../troncal.service';

describe('TroncalListComponent', () => {
  let component: TroncalListComponent;
  let fixture: ComponentFixture<TroncalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TroncalListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [TroncalService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TroncalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
