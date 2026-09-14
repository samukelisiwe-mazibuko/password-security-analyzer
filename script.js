const analyzeBtn = document.getElementById("analyzeBtn");

analyzeBtn.addEventListener("click", () => {
    const password = document.getElementById("passwordInput").value;
    const result = document.getElementById("result");

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[^A-Za-z0-9]/.test(password);

    let score = 0;

    if (password.length >= 8) {
        score ++;
    }

    if (hasUppercase){
        score ++;
    }

    if(hasLowercase){
        score ++;
    }

    if (hasNumber) {
        score ++;
    }

    if(hasSpecial){
        score++;
    }

    let strength = "weak";

    if (score >= 4) {
        strength = "Strong";
    } else if (score >= 3) {
        strength = "Medium";
    }

    result.innerHTML = `
        Length: ${password.length >= 8 ? "Valid" : "Invalid"}<br>
        Uppercase: ${hasUppercase ? "Present" : "Missing"}<br>
        Lowercase: ${hasLowercase ? "Present" : "Missing"}<br>
        Number: ${hasNumber ? "Present" : "Missing"}<br>
        Special Character: ${hasSpecial ? "Present" : "Missing"}<br>
        Score: ${score}/5<br>
        Strength: ${strength}
    `;
});