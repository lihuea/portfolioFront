import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiencia2Component } from './experiencia2.component';

describe('Experiencia2Component', () => {
  let component: Experiencia2Component;
  let fixture: ComponentFixture<Experiencia2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Experiencia2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Experiencia2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
