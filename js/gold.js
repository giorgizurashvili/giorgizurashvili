document.addEventListener('DOMContentLoaded', function() {
    const sampleButtons = document.querySelectorAll('.sample-btn');
    const weightInput = document.getElementById('weight');
    const totalPrice = document.getElementById('total-price');
    const commissionAmount = document.getElementById('commission-amount');
    const finalPrice = document.getElementById('final-price');
    
    let selectedSample = '';

    const goldPrices = {

        '375': 30,
        '500': 130,
        '583': 157,
        '583dut' :129,
        '750':188,
        '900': 206,
        '958': 254,
        '999': 254
    };

    sampleButtons.forEach(button => {
        button.addEventListener('click', function() {
            sampleButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            selectedSample = this.dataset.sample;
            calculatePrice();
        });
    });

    weightInput.addEventListener('input', function() {
        calculatePrice();
    });

    function calculatePrice() {
        const weight = parseFloat(weightInput.value) || 0;
        
        if (selectedSample && weight > 0) {
            let pricePerGram = 0;
            
            if (selectedSample === '375') {
                pricePerGram = goldPrices['375'];
            } else if (selectedSample === '500') {
                pricePerGram = goldPrices['500'];
            } else if (selectedSample === '583') {
                pricePerGram = goldPrices['583'];
            } else if (selectedSample === '583dut') {
                pricePerGram = goldPrices['583dut'];
            } else if (selectedSample === '750') {
                pricePerGram = goldPrices['750'];
            } else if (selectedSample === '900') {
                pricePerGram = goldPrices['900'];
            } else if (selectedSample === '958') {
                pricePerGram = goldPrices['958'];
            } else if (selectedSample === '999') {
                pricePerGram = goldPrices['999'];
            }
            
            const total = weight * pricePerGram;
            const commission = total * 0.02;
            const final = total - commission;
            
            totalPrice.textContent = total.toFixed(2) + ' ლარი';
            commissionAmount.textContent = commission.toFixed(2) + ' ლარი';
            finalPrice.textContent = final.toFixed(2) + ' ლარი';
        } else {
            
            totalPrice.textContent = '0 ლარი';
            commissionAmount.textContent = '0 ლარი';
            finalPrice.textContent = '0 ლარი';
        }
    }
});