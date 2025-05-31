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
export const generateRecurringDates = (config) => {
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

  let configVaildation = validateConfig(config);
  if (!configVaildation.isValid) {
    console.error(configVaildation.error);
    return;
  }

  let startDate = moment(STARTS_ON, FORMAT);
  let endDate = moment(ENDS_ON, FORMAT);
  let _startDateSTR = STARTS_ON;
  let _endDateSTR = ENDS_ON;
  let dates = [];
  let text = "";

  if (FREQUENCY === "D") {
    text = getFrequencyText(FREQUENCY, INTERVAL);

    // Dates Creation
    while (startDate.isSameOrBefore(endDate)) {
      dates.push(startDate.format(FORMAT));
      startDate.add(INTERVAL, "days");
    }
  } else if (FREQUENCY === "W") {
    text = getFrequencyText(FREQUENCY, INTERVAL, {
      WEEK_DAYS,
    });

    // Dates Creation
    if (INTERVAL == 1) {
      let _weekDays = [];
      while (startDate.isSameOrBefore(endDate)) {
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
        if (
          startDate.month() == endDate.month() &&
          startDate.year() == endDate.year() &&
          startDate.isAfter(endDate)
        ) {
          startDate = endDate;
        }
      }
      dates = _weekDays;
    } else {
      while (startDate.isSameOrBefore(endDate)) {
        let _curWeek = startDate.week();
        let _curYear = startDate.year();
        let _weekDays = [];
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
  } else if (FREQUENCY === "M") {
    text = getFrequencyText(FREQUENCY, INTERVAL, {
      MONTH_DATES,
    });

    // Dates Creation
    if (INTERVAL === 1) {
      let _monthDates = [];
      while (startDate.isSameOrBefore(endDate)) {
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
        if (
          startDate.month() == endDate.month() &&
          startDate.year() == endDate.year() &&
          startDate.isAfter(endDate)
        ) {
          startDate = endDate;
        }
      }
      dates = _monthDates;
    } else {
      while (startDate.isSameOrBefore(endDate)) {
        let _curMonth = startDate.month();
        let _curYear = startDate.year();
        let _monthDates = [];
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
  } else if (FREQUENCY === "Y") {
    let yearDayOfWeekIndex = []; // 0, 1, 2, 3, 4, 5, 6

    DAYS_OF_WEEK.forEach((day, index) => {
      if (WEEK_ORDINALS.includes(day)) {
        yearDayOfWeekIndex.push(index);
      }
    }); // making index of days of week

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

    // Dates Creation
    if (INTERVAL === 1) {
      let _yearMonthsDates = [];
      while (startDate.isSameOrBefore(endDate)) {
        let isMonthInSelection = MONTH_NAMES.includes(
          startDate.format("MMM").toUpperCase()
        );
        if (isMonthInSelection) {
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
        if (
          startDate.month() == endDate.month() &&
          startDate.year() == endDate.year() &&
          startDate.isAfter(endDate)
        ) {
          startDate = endDate;
        }
      }
      dates = _yearMonthsDates;
    } else {
      while (startDate.isSameOrBefore(endDate)) {
        let _curYear = startDate.year();
        let _yearMonthsDates = [];
        MONTH_NAMES.forEach((month) => {
          let monthIndex = MONTHS.indexOf(month);
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
        if (startDate.year() == endDate.year() && startDate.isAfter(endDate)) {
          startDate = endDate;
        }
      }
    }
  }

  dates = dates.sort((a, b) => moment(a, FORMAT).diff(moment(b, FORMAT))); // sorting

  if (EXCLUDE_DATES.length > 0) {
    dates = dates.filter((date) => !EXCLUDE_DATES.includes(date));
  }

  return {
    text,
    dates,
  };
};
