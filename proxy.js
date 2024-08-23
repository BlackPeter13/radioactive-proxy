const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

const pool1Url = 'http://pool1.example.com';
const pool2Url = 'http://pool2.example.com';

app.post('/mine', async (req, res) => {
    const minerData = req.body;

    try {
        // Send the mining work to Pool 1
        const pool1Response = await axios.post(`${pool1Url}/work`, minerData);
        
        // Send the mining work to Pool 2
        const pool2Response = await axios.post(`${pool2Url}/work`, minerData);
        
        // Merge the work responses from both pools
        const mergedWork = {
            pool1: pool1Response.data,
            pool2: pool2Response.data,
        };

        // Send the merged work back to the ASIC miner
        res.json(mergedWork);

    } catch (error) {
        console.error('Error processing mining work:', error);
        res.status(500).send('Error processing mining work');
    }
});

app.listen(3000, () => {
    console.log('Merged Mining Proxy running on port 3000');
});
