const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const public = path.join(__dirname, '..', 'public');

app.use(express.static(public));

app.get('*', (req, res) => {
    res.sendFile(path.join(public, 'index.html'));
});

app.listen(port, () => {
    console.log('up&running!');
});