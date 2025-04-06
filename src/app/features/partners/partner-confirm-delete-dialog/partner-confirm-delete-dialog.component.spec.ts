import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerConfirmDeleteDialogComponent } from './partner-confirm-delete-dialog.component';

describe('PartnerConfirmDeleteDialogComponent', () => {
  let component: PartnerConfirmDeleteDialogComponent;
  let fixture: ComponentFixture<PartnerConfirmDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartnerConfirmDeleteDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartnerConfirmDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
