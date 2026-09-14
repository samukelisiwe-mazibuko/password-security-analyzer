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

    result.innerHTML = `
        Length: ${password.length >= 8 ? "Pass" : "Fail"}<br>
        Uppercase: ${hasUppercase ? "Pass" : "Fail"}<br>
        Lowercase: ${hasLowercase ? "Pass" : "Fail"}<br>
        Number: ${hasNumber ? "Pass" : "Fail"}<br>
        Special Character: ${hasSpecial ? "Pass" : "Fail"}
    `;
});