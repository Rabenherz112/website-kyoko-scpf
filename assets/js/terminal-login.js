const employeeId = "ID#" + Math.floor(100 + Math.random() * 999);
const usernames = ["Dr. Bright", "Dr. Clef", "Dr. Kondraki","Dr. Gears","Dr. Iceberg", "Dr. Glass","Dr. Crow","Agent Strelnikov", "Agent ██████", "Lt. Light", "Captain Hollis","D-9341","D-2000", "The Administrator", "O5-E", "SCP-999", "SCP-035", "Agent211", "Dr. Bunny", "Cerberus"]
const username = usernames[Math.floor(Math.random() * usernames.length)];
const passwordlength = Math.floor(5 + Math.random() * 16);
const password = "*".repeat(passwordlength);
const twofa = Math.floor(1000 + Math.random() * 9999).toString();

function typeWriterInput(id, text) {
    let i = 0;
    const speed = 50;
    const element = document.getElementById(id);
    const typeWriterInterval = setInterval(() => {
        if (i < text.length) {
            element.value += text.charAt(i);
            i++;
        } else {
            clearInterval(typeWriterInterval);
        }
    }, speed);
}

function fadeInEffect(elements) {
    const speed = 0.1;
    let op = 0.1;
    const fadeInInterval = setInterval(() => {
        if (op >= 1) {
            clearInterval(fadeInInterval);
        } else {
            op += op * speed;
            elements.forEach((element) => {
                element.style.opacity = op;
            });
        }
    }, 10);
}
function fadeOutEffect(elements) {
    const speed = 0.1;
    let op = 1;
    const fadeOutInterval = setInterval(() => {
        if (op <= 0.1) {
            clearInterval(fadeOutInterval);
        } else {
            op -= op * speed;
            elements.forEach((element) => {
                element.style.opacity = op;
            });
        }
    }, 10);
}

/*Begin typing the employee ID, username, password, and 2FA clear all fields as soon as the script is loaded*/
window.onload = function() {
    // Clear all input values on page load
    document.getElementById("employee-id").value = "";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("twofa").value = "";

    // Fade in the terminal and footer
    fadeInEffect([document.getElementById("terminal")]);
    fadeInEffect([document.getElementById("footer1")]);

    // Hide the error screen on reload
    document.getElementById("error-screen").style.display = "none";
    document.getElementById("watermark").style.display = "none";
    document.getElementById("footer2").style.display = "none";
    document.getElementById("terminal").style.display = "block";
};

/*Login simulation*/

setTimeout(() => {
    typeWriterInput("employee-id", employeeId);
    setTimeout(() => {
        typeWriterInput("username", username);
        setTimeout(() => {
            typeWriterInput("password", password);
            setTimeout(() => {
                typeWriterInput("twofa", twofa);
                setTimeout(() => {
                    document.getElementById("login-button").focus();
                    setTimeout(() => {
                        fadeOutEffect([document.getElementById("terminal")]);
                        fadeOutEffect([document.getElementById("footer1")]);
                        document.getElementById("terminal").style.display = "none";
                        document.getElementById("footer1").style.display = "none";
                        document.getElementById("error-screen").style.display = "block";
                        document.getElementById("watermark").style.display = "flex";
                        document.getElementById("footer2").style.display = "block";
                        fadeInEffect([document.getElementById("error-screen"), document.getElementById("watermark")]);
                        fadeInEffect([document.getElementById("footer2")]);
                    }, 600);
                }, 800);
            }, 1000);
        }, 1000);
    }, 1000);
}, 2000);
