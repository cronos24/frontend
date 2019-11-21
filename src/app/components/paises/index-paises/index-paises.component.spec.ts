import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPaisesComponent } from './index-paises.component';

describe('IndexPaisesComponent', () => {
  let component: IndexPaisesComponent;
  let fixture: ComponentFixture<IndexPaisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexPaisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexPaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
