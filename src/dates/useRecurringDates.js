import { useMemo } from "react";

import { generateRecurringDates } from "../core/generateRecurringDates";

export const useRecurringDates = (config) => {
  return useMemo(() => {
    const result = generateRecurringDates(config);
    return result || { text: "", dates: [] };
  }, [config]);
};
