# radioactive-proxy

1. Understanding the Workflow

    ASIC Miner: Connects to the proxy server and sends mining requests.
    Proxy Server: Receives the work request from the ASIC miner, splits the work between the two mining pools, and then sends the combined work back to the ASIC miner.
    Mining Pools: Receive the shares and process the mining work.

2. Setting Up the Environment
a. Node.js Environment

    Install Node.js if you haven't already: Node.js [Download](https://nodejs.org/)
    Initialize a new project:

    bash

    mkdir merged-mining-proxy
   
    cd merged-mining-proxy
   
    npm init -y
   
    npm install express axios

b. Python Environment

    Install Python if you haven't already: Python [Download](https://www.python.org/downloads/)
    Set up a virtual environment and install required packages:

    bash

    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    pip install flask requests

3.  Configuring the ASIC Miner

    Point your ASIC miner to the proxy server you just created.
    Use the IP address and port number of the machine running the proxy server (e.g., http://localhost:3000/mine).

    Useful Links

    Express.js [Documentation](https://expressjs.com/)
    Flask [Documentation]((https://flask.palletsprojects.com/en/3.0.x/))
    Axios [Documentation](https://axios-http.com/)
