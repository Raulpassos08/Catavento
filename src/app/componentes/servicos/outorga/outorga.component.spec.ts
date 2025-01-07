import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutorgaComponent } from './outorga.component';

describe('OutorgaComponent', () => {
  let component: OutorgaComponent;
  let fixture: ComponentFixture<OutorgaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutorgaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutorgaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
