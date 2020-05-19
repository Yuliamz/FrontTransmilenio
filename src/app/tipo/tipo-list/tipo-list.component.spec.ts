import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TipoListComponent } from './tipo-list.component';
import { TipoService } from '../tipo.service';

describe('TipoListComponent', () => {
  let component: TipoListComponent;
  let fixture: ComponentFixture<TipoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TipoListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [TipoService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
