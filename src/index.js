const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
document.getElementById(#start-btn).addEventListener("click", function(){
  startCountdown()
}
)



// ITERATION 2: Start Countdown

function startCountdown() {
  let counter = 10;
  const id = setInterval(function() {

    console.log("startCountdown called!");

    counter--;
    if (counter === 0){
      clearInterval(id);
    }

  }, 1000);

if (counter === 0) {
  showToast();
}
if ( counter != 0){
  document.getElementById(#start-btn).disabled = true; 
}
  // Your code goes here ...
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
