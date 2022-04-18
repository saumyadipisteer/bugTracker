import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugListTableComponent } from './bug-list-table.component';

describe('BugListTableComponent', () => {
  let component: BugListTableComponent;
  let fixture: ComponentFixture<BugListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BugListTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BugListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
