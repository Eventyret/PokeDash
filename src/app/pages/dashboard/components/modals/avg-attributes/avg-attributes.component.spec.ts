import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AvgAttributesComponent } from "./avg-attributes.component";

describe("AvgAttributesComponent", () => {
  let component: AvgAttributesComponent;
  let fixture: ComponentFixture<AvgAttributesComponent>;

  beforeEach(async(() => {
	TestBed.configureTestingModule({
		declarations: [ AvgAttributesComponent ]
	})
	.compileComponents();
  }));

  beforeEach(() => {
	fixture = TestBed.createComponent(AvgAttributesComponent);
	component = fixture.componentInstance;
	fixture.detectChanges();
  });

  it("should create", () => {
	expect(component).toBeTruthy();
  });
});
