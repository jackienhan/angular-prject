import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpColorParentComponent } from './cp-color-parent.component';

describe('CpColorParentComponent', () => {
  let component: CpColorParentComponent;
  let fixture: ComponentFixture<CpColorParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpColorParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpColorParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
