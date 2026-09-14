const analyzeBtn = document.getElementById("analyzeBtn");

analyzeBtn.addEventListener("click", () => {
    const password = document.getElementById("passwordInput").value;
    const result = document.getElementById("result");

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[^A-Za-z0-9]/.test(password);

    result.innerHTML = `
    Length: ${password.length >= 8 ? "Pass" : "Fail"}<br>
    Uppercase: ${hasUppercase ? "Pass" : "Fail"}<br>
    Lowercase: ${hasLowercase ? "Pass" : "Fail"}<br>
    Number: ${hasNumber ? "Pass" : "Fail"}<br>
    Special Character: ${hasSpecial ? "Pass" : "Fail"}
`;
});