# recurring-dates

This package provides:

- A vanilla JS function `generateRecurringDates`
- A React hook `useRecurringDates`

## Install

```bash
npm install the-recurring-dates
```

## Usage

### Vanilla JS

```js
import { generateRecurringDates } from "recurring-dates";
```

### React

```js
import { useRecurringDates } from "recurring-dates";
```

## Via cdn

```js
<script src="https://cdn.jsdelivr.net/npm/the-recurring-dates/dist/index.umd.js"></script>
<script>
  const dates = RecurringDates.generateRecurringDates({ /* config */ });
  console.log(dates);
</script>
```
