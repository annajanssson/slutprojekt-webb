window.onload = function() {
    var img = document.getElementById('bakgrundbowling');
    img.onload = function() {
        document.body.style.display = 'block'; 
    };
};

document.addEventListener("DOMContentLoaded", function() {
  const bookingForm = document.getElementById("bookingForm");
  const messageDiv = document.getElementById("message");

  bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const dateInput = document.getElementById("date");
    const timeInput = document.getElementById("time");

    const selectedDate = new Date(dateInput.value);
    const selectedTime = new Date(`${dateInput.value}T${timeInput.value}`);

    // Kontrollera om vald tid är i framtiden
    const now = new Date();
    if (selectedDate < now || selectedTime < now) {
      messageDiv.textContent = "Du kan bara boka för framtiden!";
      return;
    }

    // Kontrollera om vald tid är en av de godkända tiderna för bokning
    const allowedTimes = ["10:00", "12:00", "14:00", "16:00", "18:00", "20:00"];
    const formattedSelectedTime = timeInput.value.split(":").slice(0, 2).join(":");
    if (!allowedTimes.includes(formattedSelectedTime)) {
      messageDiv.textContent = "Tiden är inte tillgänglig för bokning!";
      return;
    }

    setTimeout(function() {
      messageDiv.textContent = `Bokningen är ${dateInput.value}, klockan ${timeInput.value}`;
    }, 1000);
  });
});


let minska = document.getElementById("minska");
let öka = document.getElementById("öka");
let personCount = document.getElementById("personCount");

let count = 1; 
minska.addEventListener("click", () => {
  if (count > 1) {
    count--;
    personCount.textContent = count;
  }
});

öka.addEventListener("click", () => {
  count++;
  personCount.textContent = count;
});