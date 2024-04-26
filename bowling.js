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
  
      const date = document.getElementById("date").value;
      const time = document.getElementById("time").value;
  
      setTimeout(function() {
        messageDiv.textContent = `Bokningen är ${date}, klockan ${time}`;
      }, 1000);
    });
  });
  