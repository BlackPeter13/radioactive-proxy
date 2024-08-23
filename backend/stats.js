const fs = require('fs');
const logFile = './logs/proxy.log';

function logRequest(poolName, requestData, responseData) {
    const logEntry = `${new Date().toISOString()} - Pool: ${poolName}, Request: ${JSON.stringify(requestData)}, Response: ${JSON.stringify(responseData)}\n`;
    fs.appendFileSync(logFile, logEntry);
}

module.exports = { logRequest };
