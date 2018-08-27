import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ThrottleClickDirective } from './throttle-click.directive';

const testThrottleTime = 500;

// Test wrapper component
@Component({
  template: `
    <button
      (nguThrottleClick)="onClick()"
      [throttleTime]="testThrottleTime"
    >Click Test</button>
  `,
})
class TestThrottleClickComponent {
  onClick() {}
}

describe('ThrottleClickDirective', () => {
  let component: TestThrottleClickComponent;
  let fixture: ComponentFixture<TestThrottleClickComponent>;
  let btnEl: DebugElement;
  const event = {
    preventDefault() {},
    stopPropagation() {},
  };

  beforeEach(() => {
    jasmine.clock().uninstall();
    jasmine.clock().install();

    fixture = TestBed.configureTestingModule({
      declarations: [ TestThrottleClickComponent, ThrottleClickDirective ],
    })
    .createComponent(TestThrottleClickComponent);

    fixture.detectChanges(); // initial binding

    component = fixture.componentInstance;
    btnEl = fixture.debugElement.query(By.css('button'));
  });

  it('should call onClick()', () => {
    spyOn(component, 'onClick');

    btnEl.triggerEventHandler('click', event);

    expect(component.onClick).toHaveBeenCalled();
  });

  it(`should call onClick() not often then declared throttle time`, () => {
    spyOn(component, 'onClick');

    btnEl.triggerEventHandler('click', event);
    btnEl.triggerEventHandler('click', event); // event will be ignored
    btnEl.triggerEventHandler('click', event); // event will be ignored

    jasmine.clock().tick(testThrottleTime);
    btnEl.triggerEventHandler('click', event);

    expect(component.onClick).toHaveBeenCalledTimes(2);
  });
});
