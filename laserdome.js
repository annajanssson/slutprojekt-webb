// Hämta kalenderns element
const calendar = document.getElementById('calendar');

// Funktion för att generera kalendern baserat på aktuell datum
function generateCalendar() {
  // Skapa ett datumobjekt för dagens datum
  const today = new Date();

  // Skapa en ny datumnavigerare för aktuell månad
  const nav = new Date(today.getFullYear(), today.getMonth(), 1);

  // Skapa en sträng för kalenderns HTML
  let html = '<div class="header">' + getMonthName(nav.getMonth()) + ' ' + nav.getFullYear() + '</div>';
  html += '<div class="days">';

  // Lägg till dagar för hela månaden
  while (nav.getMonth() === today.getMonth()) {
    html += '<div class="day">' + nav.getDate() + '</div>';
    nav.setDate(nav.getDate() + 1);
  }

  // Stäng kalenderens HTML-sträng
  html += '</div>';

  // Uppdatera kalenderns innehåll
  calendar.innerHTML = html;
}

// Funktion för att hämta namnet på en månad baserat på dess nummer
function getMonthName(month) {
  const months = ['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'];
  return months[month];
}

// Kör funktionen för att generera kalendern när sidan laddas om
generateCalendar();
