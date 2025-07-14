const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the 'browser' folder
const browserPath = path.join(__dirname, 'dist', 'admin-panel', 'browser');
app.use(express.static(browserPath));

// Redirect all other routes to index.html
app.get('/*', (req, res) => {
  res.sendFile(path.join(browserPath, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
