import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCreatorsComponent } from './info-creators.component';

describe('InfoCreatorsComponent', () => {
  let component: InfoCreatorsComponent;
  let fixture: ComponentFixture<InfoCreatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoCreatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCreatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
