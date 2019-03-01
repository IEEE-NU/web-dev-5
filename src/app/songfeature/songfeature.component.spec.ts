import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongfeatureComponent } from './songfeature.component';

describe('SongfeatureComponent', () => {
  let component: SongfeatureComponent;
  let fixture: ComponentFixture<SongfeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongfeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongfeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
