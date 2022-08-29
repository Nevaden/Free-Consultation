import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteHeaderSectionComponent } from './site-header-section.component';

describe('SiteHeaderSectionComponent', () => {
  let component: SiteHeaderSectionComponent;
  let fixture: ComponentFixture<SiteHeaderSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteHeaderSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteHeaderSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
