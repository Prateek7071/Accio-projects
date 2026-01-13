let counter = 0;

const counterDisplay = document.getElementById("count");
const errorDisplay = document.getElementById("error");
const decrementBtn = document.getElementById("decrementBtn");
const incrementBtn = document.getElementById("incrementBtn");
const clearBtn = document.getElementById("clearBtn");

function displayMessage() {
  counterDisplay.textContent = counter;

  if (counter === 0) {
    clearBtn.classList.add("hidden");
  } else {
    clearBtn.classList.remove("hidden");
  }
}

function displayError() {
  errorDisplay.classList.add("show");
}

decrementBtn.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
    displayMessage();
  } else {
    displayError();
  }
});

incrementBtn.addEventListener("click", () => {
  if(counter===0){
    errorDisplay.classList.remove("show");
  }
  counter++;
  displayMessage();
  
});

clearBtn.addEventListener("click", () => {
  counter = 0;
  displayMessage();
});

displayMessage();
