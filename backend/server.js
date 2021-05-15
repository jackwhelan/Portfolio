const express = require('express');
const server = express();

require('./config');

const PORT = process.env.PORT;

server.get('/api', (req, res) => {
    res.json({
        'TESTING': 'TESTING',
    });
});

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
