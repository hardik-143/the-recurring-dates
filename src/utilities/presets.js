import moment from "moment";

/**
 * FOR WEEK DAYS CODE
 * @type {string[]}
 * @description - The weekdays names in the format of MMM
 */
export const WEEK_DAYS_CODES = moment
  .weekdays()
  .map((day) => day.slice(0, 3).toUpperCase());

/**
 * FOR MONTHS
 * @type {string[]}
 * @description - The months names in the format of MMM
 */
export const MONTHS = moment
  .months()
  .map((month) => month.slice(0, 3).toUpperCase());

/**
 * FOR WEEKS IN MONTH
 * @type {string[]}
 */
export const DAYS_OF_WEEK = [
  "FIRST",
  "SECOND",
  "THIRD",
  "FOURTH",
  "FIFTH",
  "LAST",
];

export const MONTH_DATES = Array.from({ length: 31 }, (_, i) => i + 1);

export const YEAR_DATES = Array.from({ length: 365 }, (_, i) => i + 1);

export const YEAR_MONTHS = Array.from({ length: 12 }, (_, i) => i + 1);
