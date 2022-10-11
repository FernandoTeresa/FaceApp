import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsidComponent } from './postsid.component';

describe('PostsidComponent', () => {
  let component: PostsidComponent;
  let fixture: ComponentFixture<PostsidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
