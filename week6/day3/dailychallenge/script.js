// script.js
const API_KEY = "YOUR_API_KEY";
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}`;

const fromSelect = document.getElementById('from-currency');
const toSelect = document.getElementById('to-currency');
const amountInput = document.getElementById('amount');
const convertBtn = document.getElementById('convert-btn');
const resultDiv = document.getElementById('result');

async function init() {
    try {
        const response = await fetch(`${BASE_URL}/codes`);
        const data = await response.json();
        
        data.supported_codes.forEach(([code, name]) => {
            const optionFrom = document.createElement('option');
            optionFrom.value = code;
            optionFrom.text = `${code} - ${name}`;
            fromSelect.add(optionFrom);

            const optionTo = document.createElement('option');
            optionTo.value = code;
            optionTo.text = `${code} - ${name}`;
            toSelect.add(optionTo);
        });
    } catch (error) {
        resultDiv.innerText = "Error loading currencies.";
    }
}

convertBtn.addEventListener('click', async () => {
    const from = fromSelect.value;
    const to = toSelect.value;
    const amount = amountInput.value;

    try {
        const response = await fetch(`${BASE_URL}/pair/${from}/${to}/${amount}`);
        const data = await response.json();
        resultDiv.innerText = `${amount} ${from} = ${data.conversion_result} ${to}`;
    } catch (error) {
        resultDiv.innerText = "Error performing conversion.";
    }
});

init();