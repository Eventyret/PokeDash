import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ListHelpComponent } from "./list-help.component";

describe("ListHelpComponent", () => {
  let component: ListHelpComponent;
  let fixture: ComponentFixture<ListHelpComponent>;

  beforeEach(async(() => {
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
