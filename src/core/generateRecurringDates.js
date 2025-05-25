import moment from "moment";
import {
  getFullDayName,
  getGivenDateOfMonth,
  isDateBetween,
  validateConfig,
  DAYS_OF_WEEK,
  MONTHS,
  WEEK_DAYS_CODES,
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
  } = config;

  let configVaildation = validateConfig(config);
  if (!configVaildation.isValid) {
    console.error(configVaildation.error);
    return;
  }

  let startDate = moment(STARTS_ON, "DD-MM-YYYY");
  let endDate = moment(ENDS_ON, "DD-MM-YYYY");
  let _startDateSTR = STARTS_ON;
  let _endDateSTR = ENDS_ON;
  let dates = [];
  let text = "";

  if (FREQUENCY === "D") {
    text = `Every ${INTERVAL == 1 ? "day" : `${INTERVAL} days`}`;

    // Dates Creation
    while (startDate.isSameOrBefore(endDate)) {
      dates.push(startDate.format("DD-MM-YYYY"));
      startDate.add(INTERVAL, "days");
    }
  } else if (FREQUENCY === "W") {
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

    text = `Every ${
      INTERVAL == 1 ? "week" : `${INTERVAL} weeks`
    } on ${daysName}`;

    // Dates Creation
    if (INTERVAL == 1) {
      let _weekDays = [];
      while (startDate.isSameOrBefore(endDate)) {
        let isDayInSelection = WEEK_DAYS.includes(
          startDate.format("dddd").slice(0, 3).toUpperCase()
        );
        if (isDayInSelection) {
          let date = startDate.format("DD-MM-YYYY");
          if (isDateBetween(date, _startDateSTR, _endDateSTR)) {
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
            .format("DD-MM-YYYY");
          if (isDateBetween(_date, _startDateSTR, _endDateSTR)) {

            _weekDays.push(_date);
          }
        });
        dates.push(..._weekDays);
        startDate.add(INTERVAL, "weeks");
      }
    }
  } else if (FREQUENCY === "M") {
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

    text = `Every ${
      INTERVAL == 1 ? "month" : `${INTERVAL} months`
    } on${monthDates}`;

    // Dates Creation
    if (INTERVAL === 1) {
      let _monthDates = [];
      while (startDate.isSameOrBefore(endDate)) {
        let isDateInSelection = MONTH_DATES.includes(startDate.format("DD"));
        if (isDateInSelection) {
          let date = startDate.format("DD-MM-YYYY");
          if (isDateBetween(date, _startDateSTR, _endDateSTR)) {
            _monthDates.push(date);
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
            .format("DD-MM-YYYY");
          if (isDateBetween(_date, _startDateSTR, _endDateSTR)) {
            _monthDates.push(_date);
          }
        });
        dates.push(..._monthDates);
        startDate.add(INTERVAL, "months");
      }
    }
  } else if (FREQUENCY === "Y") {
    let yearDayOfWeekIndex = []; // 0, 1, 2, 3, 4, 5, 6

    // console.log("DAYS_OF_WEEK ==>", DAYS_OF_WEEK);
    // console.log("WEEK_ORDINALS ==>", WEEK_ORDINALS);
    // console.log("yearDayOfWeekIndex ==>", yearDayOfWeekIndex);
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
    let sortedDays = WEEK_ORDINALS.sort(
      (a, b) => DAYS_OF_WEEK.indexOf(a) - DAYS_OF_WEEK.indexOf(b)
    ); // Sorting selected days of week

    let sortedWeekDays = WEEK_DAYS.sort(
      (a, b) => WEEK_DAYS_CODES.indexOf(a) - WEEK_DAYS_CODES.indexOf(b)
    ); // Sorting selected week days

    let sortedMonths = MONTH_NAMES.sort(
      (a, b) => MONTHS.indexOf(a) - MONTHS.indexOf(b)
    ); // Sorting selected months

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

    text = `Every ${
      INTERVAL == 1 ? "year" : `${INTERVAL} years`
    } on ${dayOfWeekSTR} ${weekDaySTR} of ${yearMonthsSTR}`;

    // Dates Creation
    if (INTERVAL === 1) {
      // console.log("INTERVAL ==>", INTERVAL);
      let _yearMonthsDates = [];
      console.log("startDate ==>", startDate, endDate);
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
              ).format("DD-MM-YYYY");
              let isDateInMonth =
                moment(_date, "DD-MM-YYYY").month() === startDate.month();
              if (isDateInMonth) {
                console.log("isDateInMonth", _date, _startDateSTR, _endDateSTR);
                if (isDateBetween(_date, _startDateSTR, _endDateSTR)) {
                  _yearMonthsDates.push(_date);
                }
              } else {
                let isDateIsInNextMonth =
                  moment(_date, "DD-MM-YYYY").month() === startDate.month() + 1;
                if (isDateIsInNextMonth && dayOfWeekName === "Last") {
                  let lastWeekDay = moment()
                    .month(startDate.month())
                    .year(startDate.year())
                    .endOf("month")
                    .day(weekDayName);
                  _date = lastWeekDay.format("DD-MM-YYYY");
                  // console.log('lastWeekDay',_date, startDate, endDate);
                  if (isDateBetween(_date, _startDateSTR, _endDateSTR)) {
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
              ).format("DD-MM-YYYY");
              let isDateInMonth =
                moment(_date, "DD-MM-YYYY").month() === monthIndex;
              if (isDateInMonth) {
                if (isDateBetween(_date, _startDateSTR, _endDateSTR)) {
                  _yearMonthsDates.push(_date);
                }
              } else {
                let isDateIsInNextMonth =
                  moment(_date, "DD-MM-YYYY").month() === monthIndex + 1;
                if (isDateIsInNextMonth && dayOfWeekName === "Last") {
                  let lastWeekDay = moment()
                    .month(monthIndex)
                    .year(_curYear)
                    .endOf("month")
                    .day(weekDayName);
                  _date = lastWeekDay.format("DD-MM-YYYY");
                  if (isDateBetween(_date, _startDateSTR, _endDateSTR)) {
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

  dates = dates.sort((a, b) =>
    moment(a, "DD-MM-YYYY").diff(moment(b, "DD-MM-YYYY"))
  ); // sorting

  if (EXCLUDE_DATES.length > 0) {
    dates = dates.filter((date) => !EXCLUDE_DATES.includes(date));
  }

  return {
    text,
    dates,
  };
};
