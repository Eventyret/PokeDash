import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BattlesComponent } from './battles.component';

describe('BattlesComponent', () => {
  let component: BattlesComponent;
  let fixture: ComponentFixture<BattlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BattlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BattlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
