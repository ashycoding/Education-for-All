// Function to handle subscription
function subscribe() {
    const email = document.getElementById("email").value;
    const message = document.getElementById("message");

    if (!email) {
        message.innerText = "Please enter an email.";
        return;
    }

    fetch("http://localhost:3000/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
    })
    .then(response => response.json())
    .then(data => {
        message.innerText = data.message;
    })
    .catch(error => {
        message.innerText = "Error subscribing!";
    });
}
// Function to handle signup
function signup() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    // Simple validation
    if (!name || !email || !password) {
        message.innerText = "All fields are required!";
        return;
    }

    // Simulating a backend request
    fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
    })
    .then(response => response.json())
    .then(data => {
        message.innerText = data.message;
    })
    .catch(error => {
        message.innerText = "Signup failed!";
    });
}
// Handle login form submission
document.getElementById("loginForm")?.addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    if (email === "test@example.com" && password === "password123") {
        document.getElementById("loginMessage").innerText = "✅ Login successful!";
    } else {
        document.getElementById("loginMessage").innerText = "❌ Invalid email or password.";
    }
});
document.getElementById("mentorshipForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name && email && message) {
        document.getElementById("responseMessage").innerText = "✅ Your mentorship request has been submitted!";
    } else {
        document.getElementById("responseMessage").innerText = "❌ Please fill in all fields.";
    }
});
document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let rating = document.getElementById("rating").value;
    let message = document.getElementById("message").value;

    // Display response message
    let responseMessage = document.getElementById("responseMessage");
    responseMessage.innerHTML = `Thank you, <b>${name}</b>! Your feedback (${rating} stars) has been received.`;
    responseMessage.style.color = "green";

    // Clear form
    document.getElementById("feedbackForm").reset();
});
