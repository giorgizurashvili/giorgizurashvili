document.addEventListener('DOMContentLoaded', function() {
    const modelButtons = document.querySelectorAll('.model-btn');
    const batteryButtons = document.querySelectorAll('.battery-btn');
    const priceAmount = document.getElementById('price-amount');
    
    let selectedModel = '';
    let selectedBattery = '';

    const iphonePrices = {
        '11': { '70-79': 450, '80-89': 500, '90-100': 550 },
        '11pro': { '70-79': 550, '80-89': 600, '90-100': 650 },
        '11promax': { '70-79': 600, '80-89': 650, '90-100': 700 },
        '12': { '70-79': 650, '80-89': 700, '90-100': 750 },
        '12pro': { '70-79': 750, '80-89': 800, '90-100': 850 },
        '12promax': { '70-79': 800, '80-89': 850, '90-100': 900 },
        '13': { '70-79': 800, '80-89': 850, '90-100': 900 },
        '13pro': { '70-79': 900, '80-89': 950, '90-100': 1000 },
        '13promax': { '70-79': 950, '80-89': 1000, '90-100': 1050 },
        '14': { '70-79': 950, '80-89': 1000, '90-100': 1050 },
        '14pro': { '70-79': 1100, '80-89': 1150, '90-100': 1200 },
        '14promax': { '70-79': 1150, '80-89': 1200, '90-100': 1250 },
        '15': { '70-79': 1100, '80-89': 1150, '90-100': 1200 },
        '15pro': { '70-79': 1300, '80-89': 1350, '90-100': 1400 },
        '15promax': { '70-79': 1350, '80-89': 1400, '90-100': 1450 },
        '16': { '70-79': 1250, '80-89': 1300, '90-100': 1350 },
        '16pro': { '70-79': 1450, '80-89': 1500, '90-100': 1550 },
        '16promax': { '70-79': 1500, '80-89': 1550, '90-100': 1600 },

        // ახალი მოდელები – სექტემბერში დაემატება
        '17': {
            '70-79': 'სექტემბერში დაემატება',
            '80-89': 'სექტემბერში დაემატება',
            '90-100': 'სექტემბერში დაემატება'
        },
        '17pro': {
            '70-79': 'სექტემბერში დაემატება',
            '80-89': 'სექტემბერში დაემატება',
            '90-100': 'სექტემბერში დაემატება'
        },
        '17promax': {
            '70-79': 'სექტემბერში დაემატება',
            '80-89': 'სექტემბერში დაემატება',
            '90-100': 'სექტემბერში დაემატება'
        }
    };

    modelButtons.forEach(button => {
        button.addEventListener('click', function() {
            modelButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            selectedModel = this.dataset.model;
            updatePrice();
        });
    });

    batteryButtons.forEach(button => {
        button.addEventListener('click', function() {
            batteryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            selectedBattery = this.dataset.battery;
            updatePrice();
        });
    });

    function updatePrice() {
        if (selectedModel && selectedBattery) {
            if (iphonePrices[selectedModel] && iphonePrices[selectedModel][selectedBattery]) {
                const price = iphonePrices[selectedModel][selectedBattery];
                priceAmount.textContent = typeof price === 'number' ? price + ' ლარი' : price;
                priceAmount.style.animation = 'fadeInUp 0.5s ease';
            }
        }
    }
});
