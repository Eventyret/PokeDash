import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { BattleHelpComponent } from "./battle-help.component";

describe("BattleHelpComponent", () => {
  let component: BattleHelpComponent;
  let fixture: ComponentFixture<BattleHelpComponent>;

  beforeEach(waitForAsync(() => {
	TestBed.configureTestingModule({
		declarations: [ BattleHelpComponent ]
	})
	.compileComponents();
  }));

  beforeEach(() => {
	fixture = TestBed.createComponent(BattleHelpComponent);
	component = fixture.componentInstance;
	fixture.detectChanges();
  });

  it("should create", () => {
	expect(component).toBeTruthy();
  });
});
