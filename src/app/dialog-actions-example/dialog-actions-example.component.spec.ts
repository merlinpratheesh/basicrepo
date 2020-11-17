import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogActionsExampleComponent } from './dialog-actions-example.component';

describe('DialogActionsExampleComponent', () => {
  let component: DialogActionsExampleComponent;
  let fixture: ComponentFixture<DialogActionsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogActionsExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogActionsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
