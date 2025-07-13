import moment from "moment";
import {
  getFullDayName,
  getGivenDateOfMonth,
  isDateBetween,
  validateConfig,
  DAYS_OF_WEEK,
  MONTHS,
  WEEK_DAYS_CODES,
  getFrequencyText,
} from "../utilities";

/**
 * Configuration object for generating recurring dates
 * @typedef {Object} RecurringDatesConfig
 * @property {string} [STARTS_ON=null] - Start date in the specified format
 * @property {string} [ENDS_ON=null] - End date in the specified format
 * @property {string} [FREQUENCY="D"] - Frequency type: "D" (daily), "W" (weekly), "M" (monthly), "Y" (yearly)
 * @property {number} [INTERVAL=1] - Interval between occurrences (e.g., every 2 weeks)
 * @property {number[]} [MONTH_DATES=[1]] - Array of dates in the month to include (for monthly/yearly)
 * @property {string[]} [WEEK_ORDINALS=["FIRST"]] - Array of week ordinals: "FIRST", "SECOND", "THIRD", "FOURTH", "FIFTH", "LAST"
 * @property {string[]} [WEEK_DAYS=["MON"]] - Array of weekdays: "MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"
 * @property {string[]} [MONTH_NAMES=["JAN"]] - Array of month names: "JAN", "FEB", "MAR", etc.
 * @property {string[]} [EXCLUDE_DATES=[]] - Array of dates to exclude from the result
 * @property {string} [FORMAT="DD-MM-YYYY"] - Date format for input and output
 */

/**
 * Result object containing generated dates and description
 * @typedef {Object} RecurringDatesResult
 * @property {string} text - Human-readable description of the recurrence pattern
 * @property {string[]} dates - Array of generated dates in the specified format
 */

/**
 * Generates recurring dates based on the provided configuration
 *
 * This function creates a series of dates following a recurring pattern such as daily,
 * weekly, monthly, or yearly. It supports complex patterns like "every 2nd Monday of
 * January" or "every 1st and 15th of each month".
 *
 * @param {RecurringDatesConfig} config - Configuration object defining the recurrence pattern
 * @returns {RecurringDatesResult|undefined} Object containing generated dates and description, or undefined if validation fails
 *
 * @example
 * // Generate daily dates
 * const dailyDates = generateRecurringDates({
 *   STARTS_ON: "01-01-2025",
 *   ENDS_ON: "05-01-2025",
 *   FREQUENCY: "D",
 *   INTERVAL: 1
 * });
 * // Returns: { text: "Every day", dates: ["01-01-2025", "02-01-2025", ...] }
 *
 * @example
 * // Generate weekly dates (every Monday and Wednesday)
 * const weeklyDates = generateRecurringDates({
 *   STARTS_ON: "01-01-2025",
 *   ENDS_ON: "31-01-2025",
 *   FREQUENCY: "W",
 *   WEEK_DAYS: ["MON", "WED"],
 *   INTERVAL: 1
 * });
 *
 * @example
 * // Generate monthly dates (1st and 15th of each month)
 * const monthlyDates = generateRecurringDates({
 *   STARTS_ON: "01-01-2025",
 *   ENDS_ON: "31-03-2025",
 *   FREQUENCY: "M",
 *   MONTH_DATES: [1, 15],
 *   INTERVAL: 1
 * });
 *
 * @example
 * // Generate yearly dates (2nd Monday of January)
 * const yearlyDates = generateRecurringDates({
 *   STARTS_ON: "01-01-2025",
 *   ENDS_ON: "31-12-2030",
 *   FREQUENCY: "Y",
 *   WEEK_ORDINALS: ["SECOND"],
 *   WEEK_DAYS: ["MON"],
 *   MONTH_NAMES: ["JAN"],
 *   INTERVAL: 1
 * });
 *
 * @throws {Error} When configuration validation fails (logged to console)
 */
export const generateRecurringDates = (config) => {
  // Destructure configuration with default values
  let {
    STARTS_ON = null,
    ENDS_ON = null,
    FREQUENCY = "D",
    INTERVAL = 1,
    MONTH_DATES = [1],
    WEEK_ORDINALS = ["FIRST"],
    WEEK_DAYS = ["MON"],
    MONTH_NAMES = ["JAN"],
    EXCLUDE_DATES = [],
    FORMAT = "DD-MM-YYYY",
  } = config;

  // Validate configuration before processing
  let configVaildation = validateConfig(config);
  if (!configVaildation.isValid) {
    console.error(configVaildation.error);
    return;
  }

  // Initialize moment objects and variables
  let startDate = moment(STARTS_ON, FORMAT);
  let endDate = moment(ENDS_ON, FORMAT);
  let _startDateSTR = STARTS_ON;
  let _endDateSTR = ENDS_ON;
  let dates = [];
  let text = "";

  // Handle daily frequency
  if (FREQUENCY === "D") {
    text = getFrequencyText(FREQUENCY, INTERVAL);

    // Generate dates by adding interval days
    while (startDate.isSameOrBefore(endDate)) {
      dates.push(startDate.format(FORMAT));
      startDate.add(INTERVAL, "days");
    }
  }
  // Handle weekly frequency
  else if (FREQUENCY === "W") {
    text = getFrequencyText(FREQUENCY, INTERVAL, {
      WEEK_DAYS,
    });

    // Handle weekly interval of 1 (simple case)
    if (INTERVAL == 1) {
      let _weekDays = [];
      while (startDate.isSameOrBefore(endDate)) {
        // Check if current day is in the selected weekdays
        let isDayInSelection = WEEK_DAYS.includes(
          startDate.format("dddd").slice(0, 3).toUpperCase()
        );
        if (isDayInSelection) {
          let date = startDate.format(FORMAT);
          if (isDateBetween(date, _startDateSTR, _endDateSTR, FORMAT)) {
            _weekDays.push(date);
          }
        }
        if (startDate.isSame(endDate)) {
          break;
        }
        startDate.add(1, "days");
        // Handle edge case when moving to next month
        if (
          startDate.month() == endDate.month() &&
          startDate.year() == endDate.year() &&
          startDate.isAfter(endDate)
        ) {
          startDate = endDate;
        }
      }
      dates = _weekDays;
    }
    // Handle weekly interval greater than 1 (complex case)
    else {
      while (startDate.isSameOrBefore(endDate)) {
        let _curWeek = startDate.week();
        let _curYear = startDate.year();
        let _weekDays = [];
        // Generate dates for each selected weekday in the current week
        WEEK_DAYS.forEach((day) => {
          let _date = moment()
            .day(getFullDayName(day))
            .week(_curWeek)
            .year(_curYear)
            .format(FORMAT);
          if (isDateBetween(_date, _startDateSTR, _endDateSTR, FORMAT)) {
            _weekDays.push(_date);
          }
        });
        dates.push(..._weekDays);
        startDate.add(INTERVAL, "weeks");
      }
    }
  }
  // Handle monthly frequency
  else if (FREQUENCY === "M") {
    text = getFrequencyText(FREQUENCY, INTERVAL, {
      MONTH_DATES,
    });

    // Handle monthly interval of 1 (simple case)
    if (INTERVAL === 1) {
      let _monthDates = [];
      while (startDate.isSameOrBefore(endDate)) {
        // Check if current date is in the selected month dates
        let isDateInSelection = MONTH_DATES.includes(
          parseInt(startDate.format("DD"))
        );
        if (isDateInSelection) {
          let date = startDate.format(FORMAT);
          if (isDateBetween(date, _startDateSTR, _endDateSTR, FORMAT)) {
            _monthDates.push(date);
          }
        }
        if (startDate.isSame(endDate)) {
          break;
        }
        startDate.add(1, "day");
        // Handle edge case when moving to next month
        if (
          startDate.month() == endDate.month() &&
          startDate.year() == endDate.year() &&
          startDate.isAfter(endDate)
        ) {
          startDate = endDate;
        }
      }
      dates = _monthDates;
    }
    // Handle monthly interval greater than 1 (complex case)
    else {
      while (startDate.isSameOrBefore(endDate)) {
        let _curMonth = startDate.month();
        let _curYear = startDate.year();
        let _monthDates = [];
        // Generate dates for each selected date in the current month
        MONTH_DATES.forEach((date) => {
          let _date = moment()
            .date(date)
            .month(_curMonth)
            .year(_curYear)
            .format(FORMAT);
          if (isDateBetween(_date, _startDateSTR, _endDateSTR, FORMAT)) {
            _monthDates.push(_date);
          }
        });
        dates.push(..._monthDates);
        startDate.add(INTERVAL, "months");
      }
    }
  }
  // Handle yearly frequency (most complex)
  else if (FREQUENCY === "Y") {
    // Create index arrays for week ordinals (FIRST, SECOND, etc.)
    let yearDayOfWeekIndex = []; // 0, 1, 2, 3, 4, 5, 6

    DAYS_OF_WEEK.forEach((day, index) => {
      if (WEEK_ORDINALS.includes(day)) {
        yearDayOfWeekIndex.push(index);
      }
    }); // making index of days of week

    // Create index arrays for weekdays (MON, TUE, etc.)
    let yearWeekDayIndex = []; // 0, 1, 2, 3, 4, 5, 6

    WEEK_DAYS_CODES.forEach((day, index) => {
      if (WEEK_DAYS.includes(day)) {
        yearWeekDayIndex.push(index);
      }
    }); // making index of week days

    text = getFrequencyText(FREQUENCY, INTERVAL, {
      WEEK_ORDINALS,
      WEEK_DAYS,
      MONTH_NAMES,
    });

    // Handle yearly interval of 1 (simple case)
    if (INTERVAL === 1) {
      let _yearMonthsDates = [];
      while (startDate.isSameOrBefore(endDate)) {
        // Check if current month is in the selected months
        let isMonthInSelection = MONTH_NAMES.includes(
          startDate.format("MMM").toUpperCase()
        );
        if (isMonthInSelection) {
          // Generate dates for each combination of week ordinal and weekday
          yearDayOfWeekIndex.forEach((dayOfWeekIndex) => {
            let dayOfWeekName = DAYS_OF_WEEK[dayOfWeekIndex];
            yearWeekDayIndex.forEach((weekDay) => {
              let weekDayName = WEEK_DAYS_CODES[weekDay];
              let _date = getGivenDateOfMonth(
                moment().month(startDate.month()).year(startDate.year()),
                weekDay,
                dayOfWeekIndex
              ).format(FORMAT);
              let isDateInMonth =
                moment(_date, FORMAT).month() === startDate.month();
              if (isDateInMonth) {
                if (isDateBetween(_date, _startDateSTR, _endDateSTR, FORMAT)) {
                  _yearMonthsDates.push(_date);
                }
              } else {
                // Handle "LAST" week ordinal edge case
                let isDateIsInNextMonth =
                  moment(_date, FORMAT).month() === startDate.month() + 1;
                if (isDateIsInNextMonth && dayOfWeekName === "Last") {
                  let lastWeekDay = moment()
                    .month(startDate.month())
                    .year(startDate.year())
                    .endOf("month")
                    .day(weekDayName);
                  _date = lastWeekDay.format(FORMAT);
                  if (
                    isDateBetween(_date, _startDateSTR, _endDateSTR, FORMAT)
                  ) {
                    _yearMonthsDates.push(_date);
                  }
                }
              }
            });
          });
        }
        if (startDate.isSame(endDate)) {
          break;
        }
        startDate.add(1, "months");
        // Handle edge case when moving to next month
        if (
          startDate.month() == endDate.month() &&
          startDate.year() == endDate.year() &&
          startDate.isAfter(endDate)
        ) {
          startDate = endDate;
        }
      }
      dates = _yearMonthsDates;
    }
    // Handle yearly interval greater than 1 (complex case)
    else {
      while (startDate.isSameOrBefore(endDate)) {
        let _curYear = startDate.year();
        let _yearMonthsDates = [];
        // Generate dates for each selected month
        MONTH_NAMES.forEach((month) => {
          let monthIndex = MONTHS.indexOf(month);
          // Generate dates for each combination of week ordinal and weekday
          yearDayOfWeekIndex.forEach((dayOfWeekIndex) => {
            let dayOfWeekName = DAYS_OF_WEEK[dayOfWeekIndex];
            yearWeekDayIndex.forEach((weekDayIndex) => {
              let weekDayName = WEEK_DAYS_CODES[weekDayIndex];
              let _date = getGivenDateOfMonth(
                moment().month(monthIndex).year(_curYear),
                weekDayIndex,
                dayOfWeekIndex
              ).format(FORMAT);
              let isDateInMonth = moment(_date, FORMAT).month() === monthIndex;
              if (isDateInMonth) {
                if (isDateBetween(_date, _startDateSTR, _endDateSTR, FORMAT)) {
                  _yearMonthsDates.push(_date);
                }
              } else {
                // Handle "LAST" week ordinal edge case
                let isDateIsInNextMonth =
                  moment(_date, FORMAT).month() === monthIndex + 1;
                if (isDateIsInNextMonth && dayOfWeekName === "Last") {
                  let lastWeekDay = moment()
                    .month(monthIndex)
                    .year(_curYear)
                    .endOf("month")
                    .day(weekDayName);
                  _date = lastWeekDay.format(FORMAT);
                  if (
                    isDateBetween(_date, _startDateSTR, _endDateSTR, FORMAT)
                  ) {
                    _yearMonthsDates.push(_date);
                  }
                }
              }
            });
          });
        });
        dates.push(..._yearMonthsDates);
        if (startDate.isSame(endDate)) {
          break;
        }
        startDate.add(INTERVAL, "years");
        // Handle edge case when moving to next year
        if (startDate.year() == endDate.year() && startDate.isAfter(endDate)) {
          startDate = endDate;
        }
      }
    }
  }

  // Sort dates chronologically
  dates = dates.sort((a, b) => moment(a, FORMAT).diff(moment(b, FORMAT))); // sorting

  // Filter out excluded dates
  if (EXCLUDE_DATES.length > 0) {
    dates = dates.filter((date) => !EXCLUDE_DATES.includes(date));
  }

  // Return the result object
  return {
    text,
    dates,
  };
};
