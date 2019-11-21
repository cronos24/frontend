import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPaisesComponent } from './view-paises.component';

describe('ViewPaisesComponent', () => {
  let component: ViewPaisesComponent;
  let fixture: ComponentFixture<ViewPaisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPaisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
