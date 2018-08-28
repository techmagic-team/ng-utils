import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ClickOutsideDirective } from './click-outside.directive';

@Component({
  template: `
    <button (nguClickOutside)="onClick()">Click Outside Test</button>
  `,
})
class TestClickOutsideComponent {
  onClick() {}
}

describe('ClickOutsideDirective', () => {
  let component: TestClickOutsideComponent;
  let fixture: ComponentFixture<TestClickOutsideComponent>;
  let btnEl: DebugElement;
  const event = {};

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ TestClickOutsideComponent, ClickOutsideDirective ],
    })
    .createComponent(TestClickOutsideComponent);

    fixture.detectChanges(); // initial binding

    component = fixture.componentInstance;
    btnEl = fixture.debugElement.query(By.css('button'));
  });

  it(`shouldn't call onClick when click on the target`, () => {
    spyOn(component, 'onClick');

    btnEl.triggerEventHandler('click', event);

    expect(component.onClick).not.toHaveBeenCalled();
  });

  it(`should call onClick when click outside the target`, () => {
    spyOn(component, 'onClick');

    document.body.click();

    expect(component.onClick).toHaveBeenCalled();
  });
});
