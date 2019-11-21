import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { EstadosIndexComponent } from "./index-estados.component";

describe("EstadosComponent", () => {
  let component: EstadosIndexComponent;
  let fixture: ComponentFixture<EstadosIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EstadosIndexComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadosIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
