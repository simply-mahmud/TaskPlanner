import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegTpComponent } from './reg-tp.component';

describe('RegTpComponent', () => {
  let component: RegTpComponent;
  let fixture: ComponentFixture<RegTpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegTpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegTpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
