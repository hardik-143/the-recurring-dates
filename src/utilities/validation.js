import moment from "moment";

const validateConfig = (config) => {
  //  STARTS_ON = null,
  // ENDS_ON = null,
  // FREQUENCY = "D",
  // EVERY_FREQUENCY = 1,
  // RECURRENCE_WEEK_DAYS = [], // If FREQUENCY is W then this is required
  // RECURRENCE_MONTH_DATES = [1], // If FREQUENCY is M then this is required
  // RECURRENCE_YEAR_DAY_OF_WEEK = ["FIRST"],
  // RECURRENCE_YEAR_WEEK_DAY = ["MON"],
  // RECURRENCE_YEAR_MONTHS = ["JAN"],
  const {
    STARTS_ON,
    ENDS_ON,
    FREQUENCY,
    INTERVAL,
    MONTH_DATES = [],
    WEEK_ORDINALS = [],
    WEEK_DAYS = [],
    MONTH_NAMES = [],
    EXCLUDE_DATES = [],
  } = config;

  if (!STARTS_ON || !ENDS_ON) {
    return {
      isValid: false,
      error:
        "Start Date and End Date are required \nExample: '01-01-2025' and '31-12-2025'",
    };
  }

  if (!moment(STARTS_ON, "DD-MM-YYYY").isValid()) {
    return {
      isValid: false,
      error: "Start Date is not valid Date",
    };
  }

  if (!moment(ENDS_ON, "DD-MM-YYYY").isValid()) {
    return {
      isValid: false,
      error: "End Date is not valid Date",
    };
  }

  if (moment(STARTS_ON, "DD-MM-YYYY").isAfter(moment(ENDS_ON, "DD-MM-YYYY"))) {
    return {
      isValid: false,
      error: "Start Date must be before End Date",
    };
  }

  if (FREQUENCY === "W" && WEEK_DAYS.length === 0) {
    return {
      isValid: false,
      error: "Week Days are required \nExample: ['MON', 'TUE', 'WED']",
    };
  }

  if (FREQUENCY === "M" && MONTH_DATES.length === 0) {
    return {
      isValid: false,
      error: "Dates are required \nExample: [1, 2, 3, 4]",
    };
  }

  if (FREQUENCY === "Y") {
    if (MONTH_NAMES.length === 0) {
      return {
        isValid: false,
        error: "Months are required \nExample: ['JAN', 'FEB', 'MAR']",
      };
    }
    if (WEEK_ORDINALS.length === 0) {
      return {
        isValid: false,
        error:
          "Days of Week are required \nExample: ['FIRST', 'THIRD', 'SECOND']",
      };
    }
    if (WEEK_DAYS.length === 0) {
      return {
        isValid: false,
        error: "Week Days are required \nExample: ['MON', 'TUE', 'WED']",
      };
    }
  }

  if (EXCLUDE_DATES.length > 0) {
    EXCLUDE_DATES.forEach((date) => {
      if (!moment(date, "DD-MM-YYYY").isValid()) {
        return {
          isValid: false,
          error: "Exclude Dates are not valid Dates",
        };
      }
    });
  }

  return {
    isValid: true,
    error: null,
  };
};

export { validateConfig };
