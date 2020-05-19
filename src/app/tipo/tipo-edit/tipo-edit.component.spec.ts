import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TipoEditComponent } from './tipo-edit.component';
import { TipoService } from '../tipo.service';

describe('TipoEditComponent', () => {
  let component: TipoEditComponent;
  let fixture: ComponentFixture<TipoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TipoEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [TipoService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
