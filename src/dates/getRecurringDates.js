
import { generateRecurringDates } from "../core/generateRecurringDates";

export const getRecurringDates = (config) => {
  const result = generateRecurringDates(config);
  return result || { text: "", dates: [] };
};
