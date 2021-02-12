import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { BattlePageComponent } from "./battle-page.component";

describe("BattleStatusComponent", () => {
  let component: BattlePageComponent;
  let fixture: ComponentFixture<BattlePageComponent>;

  beforeEach(waitForAsync(() => {
	TestBed.configureTestingModule({
		declarations: [ BattlePageComponent ]
	})
	.compileComponents();
  }));

  beforeEach(() => {
	fixture = TestBed.createComponent(BattlePageComponent);
	component = fixture.componentInstance;
	fixture.detectChanges();
  });

  it("should create", () => {
	expect(component).toBeTruthy();
  });
});
