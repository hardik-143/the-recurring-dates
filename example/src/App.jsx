import React from "react";
import { useRecurringDates } from "the-recurring-dates";

export default function App() {
  // const dates = useRecurringDates({
  //   STARTS_ON: "01-01-2025",
  //   ENDS_ON: "31-01-2025",
  //   FREQUENCY: "D",
  //   INTERVAL: 2,
  // });

  const dates = useRecurringDates({
    STARTS_ON: "01-01-2025",
    ENDS_ON: "31-01-2025",
    FREQUENCY: "W",
    INTERVAL: 2,
    WEEK_DAYS: ["MON", "TUE", "WED"],
  });
  return (
    <div>
      <h1>Recurring Dates (React Hook Test)</h1>
      <pre>{JSON.stringify(dates, null, 2)}</pre>
    </div>
  );
}
