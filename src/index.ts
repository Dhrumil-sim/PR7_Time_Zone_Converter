console.log('✅ index.ts: Starting up...');
import app from './app'; // make sure it's './app.js', not './app'
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env?.['PORT'] || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
