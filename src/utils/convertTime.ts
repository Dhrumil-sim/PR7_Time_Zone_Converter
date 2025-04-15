// Convert time in 12-hour format (with AM/PM) to 24-hour format
export function convertTo24HourFormat(time: string): number {
  const [timeStr, period] = time.split(' '); // e.g., '12:00' and 'AM'
  const [hours, minutes] = timeStr.split(':').map(Number); // e.g., 12 and 00

  let hours24 = hours;

  if (period === 'AM') {
    if (hours === 12) {
      hours24 = 0; // Midnight case
    }
  } else if (period === 'PM') {
    if (hours !== 12) {
      hours24 = hours + 12; // Convert PM hours to 24-hour format
    }
  }

  // Return time in 24-hour format, as a total number of minutes
  return hours24 * 60 + minutes; // Return time as total minutes since midnight
}
