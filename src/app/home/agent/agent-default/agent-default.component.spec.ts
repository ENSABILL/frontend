import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentDefaultComponent } from './agent-default.component';

describe('AgentDefaultComponent', () => {
  let component: AgentDefaultComponent;
  let fixture: ComponentFixture<AgentDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentDefaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
