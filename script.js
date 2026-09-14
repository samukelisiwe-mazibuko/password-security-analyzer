const analyzeBtn = document.getElementById("analyzeBtn");

analyzeBtn.addEventListener("click", () => {
    const password = document.getElementById("passwordInput").value;
    const result = document.getElementById("result");

    if (password.length >= 8) {
        result.textContent = "✓ Password length is valid";
    } else {
        result.textContent = "✗ Password must be at least 8 characters long";
    }
});