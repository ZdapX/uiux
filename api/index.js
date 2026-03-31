const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

// Izinkan orang lain mengakses file ini dari website mana pun (CORS)
app.use(cors());

// Sajikan folder 'public' secara statis
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.send('Modern UI Engine is Running! Use /modern-style.css to link your UI.');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
