import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditHomeComponent } from './reddit-home.component';

describe('RedditHomeComponent', () => {
  let component: RedditHomeComponent;
  let fixture: ComponentFixture<RedditHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedditHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedditHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
