// Convert time from 24-hour format to 12-hour format
export function convertBackTo12HourFormat(timeInMinutes: number): string {
  const hours24 = Math.floor(timeInMinutes / 60);
  const minutes = timeInMinutes % 60;

  const period = hours24 >= 12 ? 'PM' : 'AM';
  const hours12 = hours24 % 12 === 0 ? 12 : hours24 % 12; // Convert 0 to 12 for 12-hour format

  return `${hours12}:${minutes.toString().padStart(2, '0')} ${period}`;
}
