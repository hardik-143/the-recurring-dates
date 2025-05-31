import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { getRecurringDates } from "./src";
import moment from "moment";
import { DAYS_OF_WEEK } from "./src/utilities";

const ORDINALS_LIST = ({ config, setConfig }) => {
  return (
    <div>
      <label htmlFor="format">On the Day of the Week</label>
      <div>
        {DAYS_OF_WEEK.map((ordinal, index) => {
          return (
            <label key={index} htmlFor={ordinal}>
              <input
                type="checkbox"
                value={ordinal}
                id={ordinal}
                checked={config.WEEK_ORDINALS.includes(ordinal)}
                onChange={() => {
                  if (config.WEEK_ORDINALS.includes(ordinal)) {
                    setConfig({
                      ...config,
                      WEEK_ORDINALS: config.WEEK_ORDINALS.filter(
                        (_ordinal) => _ordinal !== ordinal
                      ),
                    });
                  } else {
                    setConfig({
                      ...config,
                      WEEK_ORDINALS: [...config.WEEK_ORDINALS, ordinal],
                    });
                  }
                }}
              />
              {ordinal}
            </label>
          );
        })}
      </div>
    </div>
  );
};

const DAYS_LIST = ({ config, setConfig }) => {
  return (
    <div>
      <label htmlFor="format">Days</label>
      <div>
        {moment.weekdays().map((day, index) => (
          <label key={index} htmlFor={day}>
            <input
              type="checkbox"
              value={index}
              id={day}
              checked={config.WEEK_DAYS.includes(day.slice(0, 3).toUpperCase())}
              onChange={() => {
                if (config.WEEK_DAYS.includes(day.slice(0, 3).toUpperCase())) {
                  setConfig({
                    ...config,
                    WEEK_DAYS: config.WEEK_DAYS.filter(
                      (_day) => _day !== day.slice(0, 3).toUpperCase()
                    ),
                  });
                } else {
                  setConfig({
                    ...config,
                    WEEK_DAYS: [
                      ...config.WEEK_DAYS,
                      day.slice(0, 3).toUpperCase(),
                    ],
                  });
                }
              }}
            />
            {day}
          </label>
        ))}
      </div>
    </div>
  );
};

const MONTHS_LIST = ({ config, setConfig }) => {
  return (
    <div>
      <label htmlFor="format">Months of the Year</label>
      <div>
        {moment.months().map((month, index) => {
          let monthCode = month.slice(0, 3).toUpperCase();
          return (
            <label key={index} htmlFor={monthCode}>
              <input
                type="checkbox"
                value={monthCode}
                id={monthCode}
                checked={config.MONTH_NAMES.includes(monthCode)}
                onChange={() => {
                  if (config.MONTH_NAMES.includes(monthCode)) {
                    setConfig({
                      ...config,
                      MONTH_NAMES: config.MONTH_NAMES.filter(
                        (_monthCode) => _monthCode !== monthCode
                      ),
                    });
                  } else {
                    setConfig({
                      ...config,
                      MONTH_NAMES: [...config.MONTH_NAMES, monthCode],
                    });
                  }
                }}
              />
              {month}
            </label>
          );
        })}
      </div>
    </div>
  );
};

const MONTH_DATES_LIST = ({ config, setConfig }) => {
  return (
    <div>
      <label htmlFor="monthDates">Month Dates</label>
      <div>
        {Array.from({ length: 31 }, (_, index) => {
          let date = index + 1;
          return (
            <label key={index} htmlFor={`monthDates${date}`}>
              <input
                type="checkbox"
                value={date}
                id={`monthDates${date}`}
                checked={config.MONTH_DATES.includes(date)}
                onChange={() => {
                  if (config.MONTH_DATES.includes(date)) {
                    setConfig({
                      ...config,
                      MONTH_DATES: config.MONTH_DATES.filter(
                        (_date) => _date !== date
                      ),
                    });
                  } else {
                    setConfig({
                      ...config,
                      MONTH_DATES: [...config.MONTH_DATES, date],
                    });
                  }
                }}
              />
              {date}
            </label>
          );
        })}
      </div>
    </div>
  );
};

const Demo = () => {
  const [config, setConfig] = useState({
    STARTS_ON: "",
    ENDS_ON: "",
    FREQUENCY: "D",
    INTERVAL: 1,
    MONTH_DATES: [1, 15],
    EXCLUDE_DATES: ["15-08-2025"],
    WEEK_ORDINALS: [],
    WEEK_DAYS: [],
    MONTH_NAMES: [],
    FORMAT: "YYYY-MM-DD",
  });
  const [dates, setDates] = useState([]);
  return (
    <div>
      <h1>Recurring Dates (React Hook Test)</h1>
      <select
        value={config.FREQUENCY}
        onChange={(e) => setConfig({ ...config, FREQUENCY: e.target.value })}
      >
        <option value="D">Day</option>
        <option value="W">Week</option>
        <option value="M">Month</option>
        <option value="Y">Year</option>
      </select>
      <div>
        <div>
          <label htmlFor="startsOn">Starts On</label>
          <input
            type="date"
            id="startsOn"
            value={config.STARTS_ON}
            onChange={(e) => {
              setConfig({
                ...config,
                STARTS_ON: e.target.value,
              });
            }}
          />
        </div>
        <div>
          <label htmlFor="endsOn">Ends On</label>
          <input
            type="date"
            value={config.ENDS_ON}
            onChange={(e) => {
              setConfig({
                ...config,
                ENDS_ON: e.target.value,
              });
            }}
          />
        </div>
        <div>
          <label htmlFor="interval">Interval</label>
          <input
            type="number"
            id="interval"
            value={config.INTERVAL}
            onChange={(e) => setConfig({ ...config, INTERVAL: e.target.value })}
          />
        </div>
        {config.FREQUENCY === "W" && (
          <DAYS_LIST config={config} setConfig={setConfig} />
        )}
        {config.FREQUENCY === "M" && (
          <MONTH_DATES_LIST config={config} setConfig={setConfig} />
        )}
        {config.FREQUENCY === "Y" && (
          <>
            <ORDINALS_LIST config={config} setConfig={setConfig} />
            <DAYS_LIST config={config} setConfig={setConfig} />
            <MONTHS_LIST config={config} setConfig={setConfig} />
          </>
        )}
        <div>
          <button
            onClick={() => {
              let dates = getRecurringDates(config);
              setDates(dates);
            }}
          >
            Update Dates
          </button>
        </div>
      </div>
      {dates?.dates?.length > 0 && <pre>{JSON.stringify(dates, null, 2)}</pre>}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Demo />);
