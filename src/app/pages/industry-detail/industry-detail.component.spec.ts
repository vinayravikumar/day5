import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryDetailComponent } from './industry-detail.component';

describe('IndustryDetailComponent', () => {
  let component: IndustryDetailComponent;
  let fixture: ComponentFixture<IndustryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndustryDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndustryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
