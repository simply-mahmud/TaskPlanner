import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTpComponent } from './login-tp.component';

describe('LoginTpComponent', () => {
  let component: LoginTpComponent;
  let fixture: ComponentFixture<LoginTpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginTpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginTpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
