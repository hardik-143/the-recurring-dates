import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { getRecurringDates } from "../src";
import moment from "moment";
import { DAYS_OF_WEEK } from "../src/utilities";
import "./index.css";

const ORDINALS_LIST = ({ config, setConfig }) => {
  return (
    <div className="mb-4">
      <label className="block font-medium mb-1" htmlFor="format">
        On the Day of the Week
      </label>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 overflow-y-auto p-2 border rounded bg-gray-50">
        {DAYS_OF_WEEK.map((ordinal, index) => (
          <label
            key={index}
            htmlFor={ordinal}
            className="flex items-center space-x-2"
          >
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
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span>{ordinal}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

const DAYS_LIST = ({ config, setConfig }) => {
  return (
    <div className="mb-4">
      <label className="block font-medium mb-1" htmlFor="format">
        Days
      </label>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 overflow-y-auto p-2 border rounded bg-gray-50">
        {moment.weekdays().map((day, index) => (
          <label
            key={index}
            htmlFor={day}
            className="flex items-center space-x-2"
          >
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
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span>{day}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

const MONTHS_LIST = ({ config, setConfig }) => {
  return (
    <div className="mb-4">
      <label className="block font-medium mb-1" htmlFor="format">
        Months of the Year
      </label>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 overflow-y-auto p-2 border rounded bg-gray-50">
        {moment.months().map((month, index) => {
          let monthCode = month.slice(0, 3).toUpperCase();
          return (
            <label
              key={index}
              htmlFor={monthCode}
              className="flex items-center space-x-2"
            >
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
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span>{month}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

const MONTH_DATES_LIST = ({ config, setConfig }) => {
  return (
    <div className="mb-4">
      <label className="block font-medium mb-1" htmlFor="monthDates">
        Month Dates
      </label>
      <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 max-h-40 overflow-y-auto p-2 border rounded bg-gray-50">
        {Array.from({ length: 31 }, (_, index) => {
          let date = index + 1;
          return (
            <label
              key={index}
              htmlFor={`monthDates${date}`}
              className="flex items-center space-x-1"
            >
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
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span>{date}</span>
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-700">
          Recurring Dates Demo
        </h1>
        <div className="mb-6 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <label className="font-medium">Frequency:</label>
          <select
            value={config.FREQUENCY}
            onChange={(e) =>
              setConfig({ ...config, FREQUENCY: e.target.value })
            }
            className="rounded border-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500 px-3 py-2"
          >
            <option value="D">Day</option>
            <option value="W">Week</option>
            <option value="M">Month</option>
            <option value="Y">Year</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div>
            <label htmlFor="startsOn" className="block font-medium mb-1">
              Starts On
            </label>
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
              className="rounded border-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500 px-3 py-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="endsOn" className="block font-medium mb-1">
              Ends On
            </label>
            <input
              type="date"
              value={config.ENDS_ON}
              onChange={(e) => {
                setConfig({
                  ...config,
                  ENDS_ON: e.target.value,
                });
              }}
              className="rounded border-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500 px-3 py-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="interval" className="block font-medium mb-1">
              Interval
            </label>
            <input
              type="number"
              id="interval"
              value={config.INTERVAL}
              onChange={(e) =>
                setConfig({ ...config, INTERVAL: e.target.value })
              }
              className="rounded border-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500 px-3 py-2 w-full"
            />
          </div>
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
        <div className="flex justify-center mt-6">
          <button
            onClick={() => {
              let dates = getRecurringDates(config);
              setDates(dates);
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded shadow transition"
          >
            Update Dates
          </button>
        </div>
        {dates?.dates?.length > 0 && (
          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-2 text-blue-700">Result</h2>
            <pre className="bg-gray-100 rounded p-4 overflow-x-auto text-sm">
              {JSON.stringify(dates, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Demo />);
