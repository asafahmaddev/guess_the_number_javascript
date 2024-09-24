// Sample flight data
const flights = [
    { flight: "AA123", destination: "New York", departure: "14:30", status: "On Time" },
    { flight: "BA456", destination: "London", departure: "15:00", status: "On Time" },
    { flight: "DL789", destination: "Paris", departure: "16:15", status: "On Time" },
    { flight: "UA321", destination: "Tokyo", departure: "17:00", status: "On Time" },
];

// Function to display the flight table
function displayFlightTable() {
    const tbody = document.querySelector('#flight-table tbody');
    tbody.innerHTML = ""; // Clear the table before adding new rows
    flights.forEach(flight => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${flight.flight}</td>
        <td>${flight.destination}</td>
        <td>${flight.departure}</td>
        <td class="${flight.status === 'Delayed' ? 'delayed' : ''}">${flight.status}</td>
      `;
        tbody.appendChild(row);
    });
}

// Function to simulate runway restriction (delaying flights)
function simulateRunwayRestriction() {
    flights.forEach((flight, index) => {
        if (index % 2 === 0) { // Simulate delays for some flights
            flight.status = "Delayed";
            flight.departure = adjustTime(flight.departure, 30); // Add 30 minutes to delayed flights
        }
    });
    displayFlightTable();
}

// Function to adjust time (add delay)
function adjustTime(time, delayMinutes) {
    const [hours, minutes] = time.split(":").map(Number);
    let newMinutes = minutes + delayMinutes;
    let newHours = hours;

    if (newMinutes >= 60) {
        newMinutes -= 60;
        newHours += 1;
    }

    if (newHours >= 24) {
        newHours = 0; // Reset to 00:00 if crossing midnight
    }

    // Format new time with leading zeroes
    return `${newHours.toString().padStart(2, '0')}:${newMinutes.toString().padStart(2, '0')}`;
}

// Event listener for simulating runway restriction
document.getElementById('simulate-delay').addEventListener('click', simulateRunwayRestriction);

// Initially display the flight table
window.onload = displayFlightTable;
