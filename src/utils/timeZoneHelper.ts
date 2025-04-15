// src/utils/timeZoneHelper.ts
import { timeZones } from '../timeZones';

export function getOffset(timezoneInput: string): number | null {
  const match = timeZones.find(
    (tz) =>
      tz.abbr === timezoneInput ||
      tz.value === timezoneInput ||
      tz.utc.includes(timezoneInput),
  );

  return match ? match.offset : null;
}
