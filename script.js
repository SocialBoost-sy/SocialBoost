// Random Tips
const tips = [
    "Post consistently to keep your audience engaged.",
    "Use relevant hashtags to reach a wider audience.",
    "Engage with your followers by responding to comments and messages.",
    "Analyze your analytics to understand your audience better.",
    "Collaborate with other creators to expand your reach."
];

document.getElementById("generateTip").addEventListener("click", function () {
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    document.getElementById("randomTip").textContent = randomTip;
});

// Analytics Chart
const ctx = document.getElementById('growthChart').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            label: 'Followers Growth',
            data: [100, 200, 300, 450, 600],
            borderColor: '#007BFF',
            borderWidth: 2,
            fill: false
        }]
    }
});

// Login/Register
document.getElementById("showRegisterForm").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("registerForm").classList.toggle("hidden");
});
