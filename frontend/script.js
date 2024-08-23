async function loadStats() {
    try {
        const response = await fetch('/logs/proxy.log');
        const logs = await response.text();
        const logLines = logs.trim().split('\n');
        const statsDiv = document.getElementById('stats');

        statsDiv.innerHTML = logLines.map(line => `<div class="stat-item">${line}</div>`).join('');
    } catch (error) {
        console.error('Error loading stats:', error);
    }
}

// Load stats initially and refresh every 10 seconds
loadStats();
setInterval(loadStats, 10000);
