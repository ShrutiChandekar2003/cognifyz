function showGreeting() {
    let now = new Date();
    let hours = now.getHours();
    let greeting;
  
    if (hours < 12) {
      greeting = "Good morning!";
    } else if (hours < 18) {
      greeting = "Good afternoon!";
    } else {
      greeting = "Good evening!";
    }
  
    let alertBox = document.getElementById("alertBox");
    let alertMessage = document.getElementById("alertMessage");
  
    alertMessage.textContent = greeting;
    alertBox.classList.add("show");
  
    // Automatically hide the alert after 3 seconds
    setTimeout(function() {
      alertBox.classList.remove("show");
    }, 3000);
  }
  
  function closeAlert() {
    let alertBox = document.getElementById("alertBox");
    alertBox.classList.remove("show");
  }
  