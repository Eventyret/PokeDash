import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { StartupHelpComponent } from "./startup-help.component";

describe("StartupHelpComponent", () => {
  let component: StartupHelpComponent;
  let fixture: ComponentFixture<StartupHelpComponent>;

  beforeEach(async(() => {
	TestBed.configureTestingModule({
		declarations: [ StartupHelpComponent ]
	})
	.compileComponents();
  }));

  beforeEach(() => {
	fixture = TestBed.createComponent(StartupHelpComponent);
	component = fixture.componentInstance;
	fixture.detectChanges();
  });

  it("should create", () => {
	expect(component).toBeTruthy();
  });
});
