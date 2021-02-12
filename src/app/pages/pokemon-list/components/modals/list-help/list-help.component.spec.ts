import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { ListHelpComponent } from "./list-help.component";

describe("ListHelpComponent", () => {
  let component: ListHelpComponent;
  let fixture: ComponentFixture<ListHelpComponent>;

  beforeEach(waitForAsync(() => {
	TestBed.configureTestingModule({
		declarations: [ ListHelpComponent ]
	})
	.compileComponents();
  }));

  beforeEach(() => {
	fixture = TestBed.createComponent(ListHelpComponent);
	component = fixture.componentInstance;
	fixture.detectChanges();
  });

  it("should create", () => {
	expect(component).toBeTruthy();
  });
});
