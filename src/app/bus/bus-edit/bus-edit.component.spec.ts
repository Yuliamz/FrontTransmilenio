import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BusEditComponent } from './bus-edit.component';
import { BusService } from '../bus.service';

describe('BusEditComponent', () => {
  let component: BusEditComponent;
  let fixture: ComponentFixture<BusEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BusEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [BusService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
