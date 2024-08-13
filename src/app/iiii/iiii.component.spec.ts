import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IIIIComponent } from './iiii.component';

describe('IIIIComponent', () => {
  let component: IIIIComponent;
  let fixture: ComponentFixture<IIIIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IIIIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IIIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
