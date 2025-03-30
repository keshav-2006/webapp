document.getElementById('fetchDataBtn').addEventListener('click', function() {
    fetch('/api/data') 

        .then(response => response.json())
        .then(data => {
            const dataDisplay = document.getElementById('dataDisplay');
            dataDisplay.innerHTML = '<ul>' + data.map(item => `<li>${item.name}</li>`).join('') + '</ul>'; // Adjust according to your data structure
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
