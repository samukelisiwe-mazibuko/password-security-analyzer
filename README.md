# Password Security Analyzer

## About the Project

Verification code : WTC-3YHLEKDZ

Password Security Analyzer is a beginner-friendly cybersecurity project built with HTML, CSS, and JavaScript.

The application analyzes a password and checks whether it meets common password security requirements. It calculates a security score and classifies the password as **Weak, Medium, or Strong**.

The project was created as part of my cybersecurity learning journey and software engineering portfolio.

## Features

* Password length validation
* Uppercase letter detection
* Lowercase letter detection
* Number detection
* Special character detection
* Password security score out of 5
* Weak, Medium, and Strong password classification
* Common password detection
* Password privacy protection
* Password input is cleared after analysis

## Technologies Used

* HTML5
* CSS3
* JavaScript
* Regular Expressions
* Git
* GitHub

## How It Works

The analyzer checks five password security requirements:

1. Password contains at least 8 characters.
2. Password contains an uppercase letter.
3. Password contains a lowercase letter.
4. Password contains a number.
5. Password contains a special character.

Each requirement that is satisfied adds one point to the password's score.

### Strength Levels

| Score | Strength |
| ----- | -------- |
| 0–2   | Weak     |
| 3     | Medium   |
| 4–5   | Strong   |

The application also checks the password against a small list of commonly used passwords.

## Example

A password such as:

```text
V7!qR2#nL9@xP4$z
```

should produce:

```text
Length: Valid
Uppercase: Present
Lowercase: Present
Number: Present
Special Character: Present
Score: 5/5
Strength: Strong
Common Password: No
```

## How to Run the Project

### Option 1: Open in a Browser

1. Clone the repository:

```bash
git clone git@github.com:samukelisiwe-mazibuko/password-security-analyzer.git
```

2. Open the project folder.

3. Open `index.html` in a web browser.

### Option 2: Use VS Code Live Server

1. Open the project in VS Code.
2. Install the Live Server extension.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

## Project Structure

```text
password-security-analyzer/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## Security Considerations

The application is designed to avoid storing passwords.

* Passwords are not saved to a database.
* Passwords are not stored in local storage.
* Passwords are not sent to a server.
* Passwords are not printed using `console.log()`.
* The password field is cleared after analysis.

This project is intended for educational purposes and should not be considered a replacement for professional password-security tools.

## What I Learned

Through this project, I practiced:

* JavaScript event handling
* Input validation
* Regular expressions
* Conditional statements
* Password security concepts
* Basic secure coding practices
* Git version control
* Building a project incrementally using multiple commits

## Future Improvements

Possible future improvements include:

* Adding a larger common-password database
* Adding password recommendations
* Adding automated tests
* Adding a secure password generator
* Improving the user interface
* Adding more advanced password-strength analysis

## GitHub Repository

https://github.com/samukelisiwe-mazibuko/password-security-analyzer

## Author

**Samukelisiwe Mazibuko**

Software Engineering Student | Cybersecurity Enthusiast

