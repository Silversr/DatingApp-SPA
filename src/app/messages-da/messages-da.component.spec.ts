import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesDaComponent } from './messages-da.component';

describe('MessagesDaComponent', () => {
  let component: MessagesDaComponent;
  let fixture: ComponentFixture<MessagesDaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesDaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesDaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
