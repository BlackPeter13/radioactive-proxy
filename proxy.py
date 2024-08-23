from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

pool1_url = 'http://pool1.example.com'
pool2_url = 'http://pool2.example.com'

@app.route('/mine', methods=['POST'])
def mine():
    miner_data = request.json
    
    try:
        # Send the mining work to Pool 1
        pool1_response = requests.post(f'{pool1_url}/work', json=miner_data)
        
        # Send the mining work to Pool 2
        pool2_response = requests.post(f'{pool2_url}/work', json=miner_data)
        
        # Merge the work responses from both pools
        merged_work = {
            'pool1': pool1_response.json(),
            'pool2': pool2_response.json(),
        }

        # Send the merged work back to the ASIC miner
        return jsonify(merged_work)

    except Exception as e:
        print(f'Error processing mining work: {e}')
        return 'Error processing mining work', 500

if __name__ == '__main__':
    app.run(port=3000)
