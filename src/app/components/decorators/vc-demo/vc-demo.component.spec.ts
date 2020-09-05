import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VcDemoComponent } from './vc-demo.component';

describe('VcDemoComponent', () => {
  let component: VcDemoComponent;
  let fixture: ComponentFixture<VcDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VcDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VcDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
