import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { VagonEditComponent } from './vagon-edit.component';
import { VagonService } from '../vagon.service';

describe('VagonEditComponent', () => {
  let component: VagonEditComponent;
  let fixture: ComponentFixture<VagonEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VagonEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [VagonService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VagonEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
