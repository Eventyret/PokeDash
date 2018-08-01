import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BattleStatusComponent } from "./battle-status.component";

describe("BattleStatusComponent", () => {
  let component: BattleStatusComponent;
  let fixture: ComponentFixture<BattleStatusComponent>;

  beforeEach(async(() => {
	TestBed.configureTestingModule({
		declarations: [ BattleStatusComponent ]
	})
	.compileComponents();
  }));

  beforeEach(() => {
	fixture = TestBed.createComponent(BattleStatusComponent);
	component = fixture.componentInstance;
	fixture.detectChanges();
  });

  it("should create", () => {
	expect(component).toBeTruthy();
  });
});
