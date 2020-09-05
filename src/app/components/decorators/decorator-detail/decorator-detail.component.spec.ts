import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoratorDetailComponent } from './decorator-detail.component';

describe('DecoratorDetailComponent', () => {
  let component: DecoratorDetailComponent;
  let fixture: ComponentFixture<DecoratorDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecoratorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecoratorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
