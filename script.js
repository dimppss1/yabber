document.getElementById("celebrateButton").addEventListener("click", function() {
    document.getElementById("confetti").classList.remove("hidden");
    createConfetti();
    document.getElementById("backgroundMusic").play();
    this.classList.add("hidden");
    document.getElementById("revealButton").classList.remove("hidden");
});

document.getElementById("revealButton").addEventListener("click", function() {
    document.getElementById("coupleVideo").classList.remove("hidden");
    this.classList.add("hidden"); // Hide the reveal button
});

// Function to create confetti effect
function createConfetti() {
    const colors = ['#ff0', '#0f0', '#00f'];
    // Implement your confetti creation logic here
}
