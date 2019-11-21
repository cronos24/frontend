import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePaisesComponent } from './update-paises.component';

describe('UpdatePaisesComponent', () => {
  let component: UpdatePaisesComponent;
  let fixture: ComponentFixture<UpdatePaisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePaisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
