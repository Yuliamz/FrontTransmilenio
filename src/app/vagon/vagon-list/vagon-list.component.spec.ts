import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { VagonListComponent } from './Vagon-list.component';
import { VagonService } from '../Vagon.service';

describe('VagonListComponent', () => {
  let component: VagonListComponent;
  let fixture: ComponentFixture<VagonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VagonListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [VagonService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VagonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
