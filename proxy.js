const express = require('express');
const axios = require('axios');
const fs = require('fs');
const { getPool, logStats } = require('./poolManager');
const { logRequest } = require('./stats');

const app = express();
app.use(express.json());

app.post('/mine', async (req, res) => {
    const minerData = req.body;
    const pool = getPool();  // Load balancing to decide which pool to use

    try {
        const response = await axios.post(`${pool.url}/work`, minerData);

        logRequest(pool.name, minerData, response.data);  // Log request and response
        res.json(response.data);

    } catch (error) {
        console.error(`Error sending work to ${pool.name}:`, error);
        res.status(500).send('Error processing mining work');
    }
});

app.use(express.static('../frontend'));  // Serve the frontend

app.listen(3000, () => {
    console.log('Merged Mining Proxy running on port 3000');
});
