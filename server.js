const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/admin-panel'));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/admin-panel/browser/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
