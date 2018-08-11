import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PokemonTypesComponent } from "./pokemon-types.component";

describe("PokemonTypesComponent", () => {
  let component: PokemonTypesComponent;
  let fixture: ComponentFixture<PokemonTypesComponent>;

  beforeEach(async(() => {
	TestBed.configureTestingModule({
		declarations: [ PokemonTypesComponent ]
	})
	.compileComponents();
  }));

  beforeEach(() => {
	fixture = TestBed.createComponent(PokemonTypesComponent);
	component = fixture.componentInstance;
	fixture.detectChanges();
  });

  it("should create", () => {
	expect(component).toBeTruthy();
  });
});
