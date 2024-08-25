document.getElementById('generate-advice').addEventListener('click', function() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            // Convert the advice text to uppercase and remove quotes
            const adviceText = data.slip.advice.toUpperCase();
            document.getElementById('advice-text').textContent = adviceText;
        })
        .catch(error => {
            document.getElementById('advice-text').textContent = 'ERROR FETCHING ADVICE. PLEASE TRY AGAIN.';
            console.error('Error:', error);
        });
});
