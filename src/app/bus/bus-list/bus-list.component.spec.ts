import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BusListComponent } from './Bus-list.component';
import { BusService } from '../Bus.service';

describe('BusListComponent', () => {
  let component: BusListComponent;
  let fixture: ComponentFixture<BusListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BusListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [BusService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
