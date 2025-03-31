        alert("Welcome To My Number Guessing Game")
        alert("Make Your Mind More Powerfull Here!!")
        let myNumber = Math.floor(Math.random() * 101);
        console.log("Secret Number (for testing):", myNumber);

        function checkGuess() {
            const userNumber = parseInt(document.getElementById("userInput").value);
            const message = document.getElementById("message");

            if (isNaN(userNumber) || userNumber < 0 || userNumber > 100) {
                message.innerText = "Please enter a valid number between 0 and 100.";
                message.style.color = "red";
                return;
            }

            if (userNumber === myNumber) {
                message.innerText = "🎉 WOHOO... CORRECT NUMBER! 🎉";
                message.style.color = "green";
                document.getElementById("userInput").disabled = true;
            } else if (userNumber > myNumber) {
                message.innerText = "Your number is too large. Enter another number:";
                message.style.color = "Blue";
                document.getElementById("userInput").value = "";
            } else {
                message.innerText = "Your number is too small. Enter another number:";
                message.style.color = "blue";
                document.getElementById("userInput").value = "";
            }
        }
    
