import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JellyFormContainerComponent } from './jelly-form-container.component';

describe('JellyFormContainerComponent', () => {
  let component: JellyFormContainerComponent;
  let fixture: ComponentFixture<JellyFormContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JellyFormContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JellyFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
