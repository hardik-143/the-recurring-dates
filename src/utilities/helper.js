import moment from "moment";
import { DAYS_OF_WEEK, MONTHS, WEEK_DAYS_CODES } from "../utilities";

/**
 * Check if the given date is between the start and end date
 * @param {*} date - The date to check
 * @param {*} startDate - The start date
 * @param {*} endDate - The end date
 * @returns {boolean} - True if the date is between the start and end date, false otherwise
 * @example
 * isDateBetween("10-01-2025", "01-01-2025", "31-01-2025") // true
 * isDateBetween("01-02-2025", "01-01-2025", "31-01-2025") // false
 */
export const isDateBetween = (
  date,
  startDate,
  endDate,
  format = "DD-MM-YYYY"
) => {
  return moment(date, format).isBetween(
    moment(startDate, format),
    moment(endDate, format),
    undefined,
    "[]"
  );
};

/**
 * Get the full day name of the given day
 * @param {*} day - The day of the week
 * @returns {string} - The full day name
 * @example
 * getFullDayName(0) // "Sunday"
 * getFullDayName(1) // "Monday"
 * getFullDayName(2) // "Tuesday"
 */
export const getFullDayName = (day) => {
  return moment().day(day).format("dddd");
};

export const getGivenDateOfMonth = (startDate, dayOfWeek, weekNumber) => {
  var myMonth = moment(startDate).startOf("month"); // Start of the month of the given startDate
  // dayOfWeek of the first week of the month
  var firstDayOfWeek = myMonth.clone().weekday(dayOfWeek);

  // Check if first firstDayOfWeek is in the given month
  if (firstDayOfWeek.month() != myMonth.month()) {
    weekNumber++;
  }
  // Return result
  return firstDayOfWeek.add(weekNumber, "weeks");
};

/**
 * Get the frequency text
 * @param {*} frequency - The frequency
 * @param {*} interval - The interval
 * @param {*} props - The props
 * @returns {string} - The frequency text
 * @example
 * getFrequencyText("D", 2) // "Every 2 days"
 * getFrequencyText("W", 1, { WEEK_DAYS: ["MON", "TUE", "WED"], WEEK_DAYS_CODES: ["MON", "TUE", "WED"] }) // "Every week on Monday, Tuesday, Wednesday"
 * getFrequencyText("M", 1, { MONTH_DATES: [1, 15] }) // "Every month on 1st and 15th"
 * getFrequencyText("M", 2, { MONTH_DATES: [1, 15] }) // "Every 2 months on 1st and 15th"
 */
export const getFrequencyText = (frequency, interval, props) => {
  if (frequency === "D") {
    return `Every ${interval == 1 ? "day" : `${interval} days`}`;
  } else if (frequency === "W") {
    const { WEEK_DAYS } = props;

    let daysName = "";
    let sortedDays = WEEK_DAYS.sort(
      (a, b) => WEEK_DAYS_CODES.indexOf(a) - WEEK_DAYS_CODES.indexOf(b)
    ); // Sorting selected week days

    let WEEK_DAYS_LENGTH = WEEK_DAYS.length;

    sortedDays.forEach((day, index) => {
      if (WEEK_DAYS_LENGTH === 1) {
        daysName += `${day}`;
      } else {
        if (WEEK_DAYS_LENGTH > 1 && index == WEEK_DAYS_LENGTH - 1) {
          daysName += ` and ${day}`;
        } else if (index == WEEK_DAYS_LENGTH - 2) {
          daysName += `${day}`;
        } else {
          daysName += `${day}, `;
        }
      }
    }); // week days text

    return `Every ${
      interval == 1 ? "week" : `${interval} weeks`
    } on ${daysName}`;
  } else if (frequency === "M") {
    const { MONTH_DATES } = props;
    let monthDates = "";
    let sortedDates = MONTH_DATES.sort((a, b) => a - b);
    let MONTH_DATES_LENGTH = MONTH_DATES.length;

    sortedDates.forEach((date) => {
      let _date = moment(`${date}-01`, "DD-MM").format("Do");
      if (MONTH_DATES_LENGTH === 1) {
        monthDates += ` ${_date}.`;
      } else {
        if (
          MONTH_DATES_LENGTH > 1 &&
          date == MONTH_DATES[MONTH_DATES_LENGTH - 1]
        ) {
          monthDates += ` and ${_date}.`;
        } else if (date == MONTH_DATES[MONTH_DATES_LENGTH - 2]) {
          monthDates += ` ${_date}`;
        } else {
          monthDates += ` ${_date},`;
        }
      }
    }); // Month dates text

    return `Every ${
      interval == 1 ? "month" : `${interval} months`
    } on${monthDates}`;
  } else if (frequency === "Y") {
    const { WEEK_ORDINALS, WEEK_DAYS, MONTH_NAMES } = props;

    let sortedDays = WEEK_ORDINALS.sort(
      (a, b) => DAYS_OF_WEEK.indexOf(a) - DAYS_OF_WEEK.indexOf(b)
    ); // Sorting selected days of week [first, second, third, fourth, fifth, last]

    let sortedWeekDays = WEEK_DAYS.sort(
      (a, b) => WEEK_DAYS_CODES.indexOf(a) - WEEK_DAYS_CODES.indexOf(b)
    ); // Sorting selected week days [MON, TUE, WED, THU, FRI, SAT, SUN]

    let sortedMonths = MONTH_NAMES.sort(
      (a, b) => MONTHS.indexOf(a) - MONTHS.indexOf(b)
    ); // Sorting selected months [JAN, FEB, MAR, APR, MAY, JUN, JUL, AUG, SEP, OCT, NOV, DEC]

    let dayOfWeekSTR = "";
    let weekDaySTR = "";
    let yearMonthsSTR = "";

    let WEEK_ORDINALS_LENGTH = WEEK_ORDINALS.length;
    let WEEK_DAYS_LENGTH = WEEK_DAYS.length;
    let MONTH_NAMES_LENGTH = MONTH_NAMES.length;

    sortedDays.forEach((day, index) => {
      if (WEEK_ORDINALS_LENGTH === 1) {
        dayOfWeekSTR += `${day}`;
      } else {
        if (WEEK_ORDINALS_LENGTH > 1 && index == WEEK_ORDINALS_LENGTH - 1) {
          dayOfWeekSTR += ` and ${day}`;
        } else if (index == WEEK_ORDINALS_LENGTH - 2) {
          dayOfWeekSTR += `${day}`;
        } else {
          dayOfWeekSTR += `${day}, `;
        }
      }
    }); // Days Of Week Text

    sortedWeekDays.forEach((day, index) => {
      if (WEEK_DAYS_LENGTH === 1) {
        weekDaySTR += `${day}`;
      } else {
        if (WEEK_DAYS_LENGTH > 1 && index == WEEK_DAYS_LENGTH - 1) {
          weekDaySTR += ` and ${day}`;
        } else if (index == WEEK_DAYS_LENGTH - 2) {
          weekDaySTR += `${day}`;
        } else {
          weekDaySTR += `${day}, `;
        }
      }
    }); // Week Days Text

    sortedMonths.forEach((month, index) => {
      if (MONTH_NAMES_LENGTH === 1) {
        yearMonthsSTR += `${month}`;
      } else {
        if (MONTH_NAMES_LENGTH > 1 && index == MONTH_NAMES_LENGTH - 1) {
          yearMonthsSTR += ` and ${month}`;
        } else if (index == MONTH_NAMES_LENGTH - 2) {
          yearMonthsSTR += `${month}`;
        } else {
          yearMonthsSTR += `${month}, `;
        }
      }
    }); // Months Text

    return `Every ${
      interval == 1 ? "year" : `${interval} years`
    } on ${dayOfWeekSTR} ${weekDaySTR} of ${yearMonthsSTR}`;
  }
};
