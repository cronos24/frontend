import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePaisesComponent } from './create-paises.component';

describe('CreatePaisesComponent', () => {
  let component: CreatePaisesComponent;
  let fixture: ComponentFixture<CreatePaisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePaisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
