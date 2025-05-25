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
import { generateRecurringDates } from "the-recurring-dates";
const dates = generateRecurringDates({
  /* config */
});

console.log(dates);
```

### React

```js
import { useRecurringDates } from "the-recurring-dates";

function MyComponent() {
  const dates = useRecurringDates({
    /* config */
  });

  return <pre>{JSON.stringify(dates, null, 2)}</pre>;
}
```

## Via cdn

```js
<script src="https://cdn.jsdelivr.net/npm/the-recurring-dates/dist/index.umd.js"></script>
<script>
  const dates = RecurringDates.generateRecurringDates({ /* config */ });
  console.log(dates);
</script>
```
