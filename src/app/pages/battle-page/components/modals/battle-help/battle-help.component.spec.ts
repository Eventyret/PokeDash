import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BattleHelpComponent } from "./battle-help.component";

describe("BattleHelpComponent", () => {
  let component: BattleHelpComponent;
  let fixture: ComponentFixture<BattleHelpComponent>;

  beforeEach(async(() => {
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
