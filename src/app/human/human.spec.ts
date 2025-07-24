import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Human } from './human';

describe('Human', () => {
  let component: Human;
  let fixture: ComponentFixture<Human>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Human]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Human);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
