import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubProjectsComponent } from './sub-projects.component';

describe('SubProjectsComponent', () => {
  let component: SubProjectsComponent;
  let fixture: ComponentFixture<SubProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
