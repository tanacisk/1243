const urlParams = new URLSearchParams(window.location.search);
const from = urlParams.get('from');
const to = urlParams.get('to');
const departureDate = urlParams.get('departure_date');
const arrivalDate = urlParams.get('arrival_date');
const passengers = urlParams.get('passengers');

if (from && to && departureDate && arrivalDate && passengers) {
    const flightsTable = document.getElementById('flightsTable');
    const newRow = flightsTable.insertRow();
    newRow.insertCell().textContent = departureDate;
    newRow.insertCell().textContent = `${from} - ${to}`;
    newRow.insertCell().textContent = "Забронирован"; 
}
