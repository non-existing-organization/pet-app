// frontend/index.js
import express from 'express';
import path from 'path';

const app = express();
const PORT = 3002; // Make sure this port is different from your backend port

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Frontend server running on http://localhost:${PORT}`);
});
