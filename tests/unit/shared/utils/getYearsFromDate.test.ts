import { getYearsFromDate } from "@/utils";

const mockToday = new Date("2023-06-15");

describe("getYearsFromDate", () => {
  it("should return 0 for a date less than a year ago", () => {
    const date = new Date("2023-01-01");
    expect(getYearsFromDate(date, { mockDate: mockToday })).toBe(0);
  });

  it("should return 1 for a date exactly one year ago", () => {
    const date = new Date("2022-06-15");
    expect(getYearsFromDate(date, { mockDate: mockToday })).toBe(1);
  });

  it("should return 1 for a date more than one year but less than two years ago", () => {
    const date = new Date("2022-01-01");
    expect(getYearsFromDate(date, { mockDate: mockToday })).toBe(1);
  });

  it("should return 5 for a date exactly five years ago", () => {
    const date = new Date("2018-06-15");
    expect(getYearsFromDate(date, { mockDate: mockToday })).toBe(5);
  });

  it("should handle leap years correctly", () => {
    const date = new Date("2020-02-29");
    expect(getYearsFromDate(date, { mockDate: mockToday })).toBe(3);
  });

  it("should return 0 for a future date", () => {
    const date = new Date("2024-01-01");
    expect(getYearsFromDate(date, { mockDate: mockToday })).toBe(0);
  });

  it("should handle dates with different months and days correctly", () => {
    const date = new Date("2022-07-20");
    expect(getYearsFromDate(date, { mockDate: mockToday })).toBe(0);
  });

  it("should handle dates with same month but different days correctly", () => {
    const date = new Date("2022-06-20");
    expect(getYearsFromDate(date, { mockDate: mockToday })).toBe(0);
  });

  it("should handle dates with same day but different months correctly", () => {
    const date = new Date("2022-05-15");
    expect(getYearsFromDate(date, { mockDate: mockToday })).toBe(1);
  });
});
