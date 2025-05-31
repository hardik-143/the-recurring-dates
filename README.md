# the-recurring-dates

This package provides:

- ✅ A vanilla JS function `getRecurringDates`
- ⚛️ A React hook `useRecurringDates`

Supports flexible recurring patterns like daily, weekly, monthly, and yearly.

---

> **Tags**: `nodejs`, `npm-package`, `utility`, `javascript`, `open-source`

---

## 📦 Install

```bash
npm install the-recurring-dates
```

---

## ⚙️ Configuration Options

| Option          | Type       | Description                                                                     |
| --------------- | ---------- | ------------------------------------------------------------------------------- |
| `STARTS_ON`     | `string`   | Start date of the recurrence (`DD-MM-YYYY`)                                     |
| `ENDS_ON`       | `string`   | End date of the recurrence (`DD-MM-YYYY`)                                       |
| `FREQUENCY`     | `string`   | Recurrence type: `"D"` (daily), `"W"` (weekly), `"M"` (monthly), `"Y"` (yearly) |
| `INTERVAL`      | `number`   | Every X units of the frequency (e.g., every 2 weeks)                            |
| `MONTH_DATES`   | `number[]` | Dates of the month to include (for monthly/yearly)                              |
| `WEEK_DAYS`     | `string[]` | Days of the week: `"MON"`, `"TUE"`, `"WED"`, etc.                               |
| `WEEK_ORDINALS` | `string[]` | Week ordinals: `"FIRST"`, `"SECOND"`, `"THIRD"`, `"FOURTH"`, `"LAST"`           |
| `EXCLUDE_DATES` | `string[]` | Dates to exclude from the result                                                |
| `FORMAT`        | `string`   | Input Date format                                                               |

---

## 🚀 Usage

### 🔧 Vanilla JS

```js
import { generateRecurringDates } from "the-recurring-dates";

const dates = generateRecurringDates({
  STARTS_ON: "01-06-2025",
  ENDS_ON: "31-06-2025",
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
    STARTS_ON: "01-06-2025",
    ENDS_ON: "31-06-2025",
    FREQUENCY: "M",
    INTERVAL: 1,
    MONTH_DATES: [1, 15],
    EXCLUDE_DATES: ["15-08-2025"],
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
  const dates = RecurringDates.getRecurringDates({
    STARTS_ON: "01-06-2025",
    ENDS_ON: "31-06-2025",
    FREQUENCY: "M",
    MONTH_DATES: [1, 15],
  });

  console.log(dates);
</script>
```

---

## 🤝 Contributing

We welcome contributions to `the-recurring-dates`! Here's how you can help:

### 🐛 Bug Reports

If you find a bug, please create an issue with:

- A clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Your environment details

### 💡 Feature Requests

We love new ideas! For feature requests:

- Explain the feature and its use case
- Describe any alternatives you've considered
- Include any relevant examples

### 🛠️ Development

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests (`npm test`)
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### 📝 Code Style

- Follow the existing code style
- Write clear commit messages
- Add tests for new features
- Update documentation as needed

### 🧪 Testing

Before submitting a PR:

- Run all tests (`npm test`)
- Ensure code coverage is maintained
- Test in different environments if applicable

## 📘 License

This project is licensed under the MIT License - see the [LICENSE](https://choosealicense.com/licenses/mit/) file for details.

## 🔗 Links

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://thehardik.in//)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/thehardik143/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/__thehardik/)

## 📦 NPM Stats

[![npm version](https://img.shields.io/npm/v/the-recurring-dates.svg)](https://www.npmjs.com/package/the-recurring-dates)
[![npm downloads](https://img.shields.io/npm/dm/the-recurring-dates.svg)](https://www.npmjs.com/package/the-recurring-dates)
[![npm license](https://img.shields.io/npm/l/the-recurring-dates.svg)](https://www.npmjs.com/package/the-recurring-dates)
