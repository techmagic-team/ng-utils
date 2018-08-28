# ng-utils

Collection of utils for Angular application

- [Install](#install)
- [Utils](#utils)
  - [Directives](#directives)
    - [nguThrottleClick](#nguThrottleClick)
    - [nguClickOutside](#nguClickOutside)

## Install

1. `npm install --save @techmagic/ng-utils`
2. `import { NgUtilsModule } from '@techmagic/ng-utils-lib'`
3. Add NgUtilsModule to your `imports` array: `imports: [  NgUtilsModule ]`

## Utils

### Directives

#### nguThrottleClick

Throttle click to declared number of milliseconds

```
<button (nguThrottleClick)="onClick()">Click</button>
```

Property | Type | Default value | Description
-------- | ---- | ----------- | -------------
nguThrottleClick | function | - | Method to handle click
throttleTime | number | 1000 | Time to throttle click event

#### nguClickOutside

Listen for click outside the target element

```
<button (nguClickOutside)="onClick()">Click</button>
```

Property | Type | Default value | Description
-------- | ---- | ----------- | -------------
nguClickOutside | function | - | Method to handle click






