import moment from "moment";

export const isDateBetween = (date, startDate, endDate) => {
  let format = "DD-MM-YYYY";
  return moment(date, format).isBetween(
    moment(startDate, format),
    moment(endDate, format),
    undefined,
    "[]"
  );
};

export const getFullDayName = (day) => {
  return moment().day(day).format("dddd");
};

export const getGivenDateOfMonth = (startDate, dayOfWeek, weekNumber) => {
  // Start of the month of the given startDate
  var myMonth = moment(startDate).startOf("month");
  // dayOfWeek of the first week of the month
  var firstDayOfWeek = myMonth.clone().weekday(dayOfWeek);
  // Check if first firstDayOfWeek is in the given month
  if (firstDayOfWeek.month() != myMonth.month()) {
    weekNumber++;
  }
  // Return result
  return firstDayOfWeek.add(weekNumber, "weeks");
};
