const config = require('./config.json');

let poolIndex = 0;

function getPool() {
    // Basic round-robin load balancing
    const pool = config.pools[poolIndex];
    poolIndex = (poolIndex + 1) % config.pools.length;
    return pool;
}

module.exports = { getPool };
