import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchWorkerComponent } from './search-worker.component';

describe('SearchWorkerComponent', () => {
  let component: SearchWorkerComponent;
  let fixture: ComponentFixture<SearchWorkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchWorkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
