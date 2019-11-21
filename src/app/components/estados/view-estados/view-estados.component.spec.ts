import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEstadosComponent } from './view-estados.component';

describe('ViewEstadosComponent', () => {
  let component: ViewEstadosComponent;
  let fixture: ComponentFixture<ViewEstadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewEstadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEstadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
