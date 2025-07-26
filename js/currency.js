document.addEventListener('DOMContentLoaded', function() {
    const currencySelect = document.getElementById('currency-select');
    const amountInput = document.getElementById('amount-input');
    const operationButtons = document.querySelectorAll('.operation-btn');
    const calculationResult = document.getElementById('calculation-result');

    let selectedOperation = 'buy';

    const exchangeRates = {
        'USD': { buy: 2.65, sell: 2.70 },
        'EUR': { buy: 2.85, sell: 2.92 },
        'RUB': { buy: 0.025, sell: 0.028 },
        'GBP': { buy: 3.35, sell: 3.45 },
        'TRY': { buy: 0.078, sell: 0.082 },
        'AZN': { buy: 1.53, sell: 1.60 },
        'AMD': { buy: 5.50, sell: 7.07, multiplier: 0.001 }, // 1000 AMD
        'AED': { buy: 6.16, sell: 7.36, multiplier: 0.1 }    // 10 AED
    };

    // Extend the select element with new options if not already there
    Object.keys(exchangeRates).forEach(code => {
        if (![...currencySelect.options].some(opt => opt.value === code)) {
            const option = document.createElement('option');
            option.value = code;
            option.textContent = `${code} - ${getCurrencyName(code)}`;
            currencySelect.appendChild(option);
        }
    });

    operationButtons.forEach(button => {
        button.addEventListener('click', function () {
            operationButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            selectedOperation = this.dataset.operation;
            calculateCurrency();
        });
    });

    currencySelect.addEventListener('change', calculateCurrency);
    amountInput.addEventListener('input', calculateCurrency);

    function calculateCurrency() {
        const currency = currencySelect.value;
        const amount = parseFloat(amountInput.value) || 0;

        if (amount > 0 && exchangeRates[currency]) {
            let rate = exchangeRates[currency][selectedOperation];
            const multiplier = exchangeRates[currency].multiplier || 1;
            const result = amount * rate * multiplier;
            calculationResult.textContent = result.toFixed(2) + ' ლარი';
        } else {
            calculationResult.textContent = '0 ლარი';
        }
    }

    function getCurrencyName(code) {
        const names = {
            'USD': 'დოლარი',
            'EUR': 'ევრო',
            'RUB': 'რუბლი',
            'GBP': 'ფუნტი',
            'TRY': 'ლირა',
            'AZN': 'მანათი',
            'AMD': 'დრამი',
            'AED': 'დირჰამი'
        };
        return names[code] || code;
    }
});
