# recurring-dates

This package provides:

- ✅ A vanilla JS function `generateRecurringDates`
- ⚛️ A React hook `useRecurringDates`

Supports flexible recurring patterns like daily, weekly, monthly, and yearly.

---

## 📦 Install

```bash
npm install the-recurring-dates
```

---

## ⚙️ Configuration Options

| Option          | Type       | Description                                                                     | Used In Frequency |
| --------------- | ---------- | ------------------------------------------------------------------------------- | ----------------- |
| `STARTS_ON`     | `string`   | Start date of the recurrence (`YYYY-MM-DD`)                                     | All               |
| `ENDS_ON`       | `string`   | End date of the recurrence (`YYYY-MM-DD`)                                       | All               |
| `FREQUENCY`     | `string`   | Recurrence type: `"D"` (daily), `"W"` (weekly), `"M"` (monthly), `"Y"` (yearly) | All               |
| `INTERVAL`      | `number`   | Every X units of the frequency (e.g., every 2 weeks)                            | All               |
| `MONTH_DATES`   | `number[]` | Dates of the month to include (for monthly/yearly)                              | M                 |
| `WEEK_DAYS`     | `string[]` | Days of the week: `"MON"`, `"TUE"`, `"WED"`, etc.                               | W, Y              |
| `WEEK_ORDINALS` | `string[]` | Week ordinals: `"FIRST"`, `"SECOND"`, `"THIRD"`, `"FOURTH"`, `"LAST"`           | Y                 |
| `MONTH_NAMES`   | `string[]` | Month names for yearly recurrence                                               | Y                 |
| `EXCLUDE_DATES` | `string[]` | Dates to exclude from the result                                                | All               |

---

## 🚀 Usage

### 🔧 Vanilla JS

```js
import { generateRecurringDates } from "the-recurring-dates";

const dates = generateRecurringDates({
  STARTS_ON: "2025-06-01",
  ENDS_ON: "2025-12-31",
  FREQUENCY: "M",
  INTERVAL: 1,
  MONTH_DATES: [1, 15],
  EXCLUDE_DATES: ["2025-08-15"],
});

console.log(dates);
```

---

### ⚛️ React Hook

```js
import { useRecurringDates } from "the-recurring-dates";

function MyComponent() {
  const dates = useRecurringDates({
    STARTS_ON: "2025-06-01",
    FREQUENCY: "W",
    INTERVAL: 1,
    WEEK_DAYS: ["MON", "WED"],
  });

  return (
    <ul>
      {dates.map((date, i) => (
        <li key={i}>{date}</li>
      ))}
    </ul>
  );
}
```

---

### 🌐 Use via CDN

```html
<script src="https://cdn.jsdelivr.net/npm/the-recurring-dates/dist/index.umd.js"></script>
<script>
  const dates = RecurringDates.generateRecurringDates({
    STARTS_ON: "2025-06-01",
    FREQUENCY: "M",
    MONTH_DATES: [1, 15],
  });

  console.log(dates);
</script>
```

---

## 📘 License

MIT
