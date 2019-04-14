import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemorizaLasTeclasComponent } from './memoriza-las-teclas.component';

describe('MemorizaLasTeclasComponent', () => {
  let component: MemorizaLasTeclasComponent;
  let fixture: ComponentFixture<MemorizaLasTeclasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemorizaLasTeclasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemorizaLasTeclasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
