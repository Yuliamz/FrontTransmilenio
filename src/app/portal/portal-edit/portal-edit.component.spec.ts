import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PortalEditComponent } from './portal-edit.component';
import { PortalService } from '../portal.service';

describe('PortalEditComponent', () => {
  let component: PortalEditComponent;
  let fixture: ComponentFixture<PortalEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PortalEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [PortalService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
