// src/utils/convertTimeZone.ts
import { convertTo24HourFormat } from './convertTime';
import { convertBackTo12HourFormat } from './convertBackTo12Hour';
import { getOffset } from './timeZoneHelper';

export function convertTimeZone(
  currentTime: string,
  currentTimezone: string,
  targetTimezone: string,
): string {
  const timeInMinutes = convertTo24HourFormat(currentTime);

  const currentOffset = getOffset(currentTimezone);
  const targetOffset = getOffset(targetTimezone);

  if (currentOffset === null || targetOffset === null) {
    throw new Error('Invalid timezone input.');
  }

  const diffInMinutes = (targetOffset - currentOffset) * 60;
  const adjustedTimeInMinutes = timeInMinutes + diffInMinutes;

  return convertBackTo12HourFormat(adjustedTimeInMinutes);
}
