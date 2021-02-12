import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { StartupHelpComponent } from "./startup-help.component";

describe("StartupHelpComponent", () => {
  let component: StartupHelpComponent;
  let fixture: ComponentFixture<StartupHelpComponent>;

  beforeEach(waitForAsync(() => {
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
