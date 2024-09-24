// Flight data array
const flights = [
    { flight: "AA123", destination: "New York", departure: "14:30", status: "On Time" },
    { flight: "BA456", destination: "London", departure: "15:00", status: "Delayed" },
    { flight: "DL789", destination: "Paris", departure: "16:15", status: "Boarding" },
    { flight: "UA321", destination: "Tokyo", departure: "17:00", status: "Cancelled" },
];

// Function to populate flight table
function populateFlightTable() {
    const tbody = document.querySelector('#flight-table tbody');
    flights.forEach(flight => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${flight.flight}</td>
        <td>${flight.destination}</td>
        <td>${flight.departure}</td>
        <td>${flight.status}</td>
      `;
        tbody.appendChild(row);
    });
}

// Trigger population of flight table after page load
window.onload = populateFlightTable;
