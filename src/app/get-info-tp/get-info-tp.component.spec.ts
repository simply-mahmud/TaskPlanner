import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetInfoTpComponent } from './get-info-tp.component';

describe('GetInfoTpComponent', () => {
  let component: GetInfoTpComponent;
  let fixture: ComponentFixture<GetInfoTpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetInfoTpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetInfoTpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
