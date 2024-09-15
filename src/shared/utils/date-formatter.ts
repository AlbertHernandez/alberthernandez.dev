import { DateRange } from "@/shared/types";

import { assertNever } from "./assert-never";

type DateFormat = "month-year" | "year";

interface FormatOptions {
  format?: DateFormat;
  separator?: string;
}

const formatDate = (
  date?: Date | null,
  options: FormatOptions = {},
): string => {
  if (!date) return "Present";

  const { format = "month-year" } = options;
  const locale = "en-US";

  switch (format) {
    case "year": {
      return date.getFullYear().toString();
    }
    case "month-year": {
      return date.toLocaleDateString(locale, {
        month: "short",
        year: "numeric",
      });
    }
    default: {
      return assertNever(format);
    }
  }
};

export const formatDateRange = (
  dateRange: DateRange,
  options: FormatOptions = {},
): string => {
  const { separator = "-", ...formatOptions } = options;

  const startDate = formatDate(dateRange.start, formatOptions);
  const endDate = formatDate(dateRange.end, formatOptions);

  return `${startDate} ${separator} ${endDate}`;
};
