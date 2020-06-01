import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PortalListComponent } from './Portal-list.component';
import { PortalService } from '../Portal.service';

describe('PortalListComponent', () => {
  let component: PortalListComponent;
  let fixture: ComponentFixture<PortalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PortalListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [PortalService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
