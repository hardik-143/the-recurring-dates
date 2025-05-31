import moment from "moment";

/**
 * Validate the config
 * @param {*} config
 * @returns {Object} {isValid: boolean, error: string}
 */
const validateConfig = (config) => {
  const {
    STARTS_ON,
    ENDS_ON,
    FREQUENCY,
    MONTH_DATES = [],
    WEEK_ORDINALS = [],
    WEEK_DAYS = [],
    MONTH_NAMES = [],
    EXCLUDE_DATES = [],
    FORMAT = "DD-MM-YYYY",
  } = config;

  if (!STARTS_ON || !ENDS_ON) {
    let startOfCurrentMonth = moment().startOf("month").format(FORMAT);
    let endOfCurrentMonth = moment().endOf("month").format(FORMAT);
    return {
      isValid: false,
      error: `Start Date and End Date are required \nExample: '${startOfCurrentMonth}' and '${endOfCurrentMonth}'`,
    };
  }

  if (!moment(STARTS_ON, FORMAT).isValid()) {
    return {
      isValid: false,
      error: "Start Date is not valid Date",
    };
  }

  if (!moment(ENDS_ON, FORMAT).isValid()) {
    return {
      isValid: false,
      error: "End Date is not valid Date",
    };
  }

  if (moment(STARTS_ON, FORMAT).isAfter(moment(ENDS_ON, FORMAT))) {
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
      if (!moment(date, FORMAT).isValid()) {
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
