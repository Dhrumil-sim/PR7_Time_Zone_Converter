import { convertTimeZone } from '../utils/convertTimeZone';

const currentTime = '4:30 PM';
const currentTz = 'IST'; // or 'India Standard Time' or even 'Asia/Kolkata' if included in UTC list
const targetTz = 'PST'; // or 'Pacific Standard Time' or 'America/Los_Angeles'

try {
  const converted = convertTimeZone(currentTime, currentTz, targetTz);
  console.log(`Converted time: ${converted}`);
} catch (error) {
  console.error((error as Error).message);
}
