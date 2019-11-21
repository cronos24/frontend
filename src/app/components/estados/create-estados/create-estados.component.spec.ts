import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEstadosComponent } from './create-estados.component';

describe('CreateEstadosComponent', () => {
  let component: CreateEstadosComponent;
  let fixture: ComponentFixture<CreateEstadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEstadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEstadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
