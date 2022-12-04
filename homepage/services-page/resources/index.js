let ordinaryExorcism = localStorage.getItem("ordinary-exorcism");
let specialExorcism = localStorage.getItem("special-exorcism");
let superDeluxeExorcism = localStorage.getItem("super-deluxe-exorcism");
let experienceParadise = localStorage.getItem("experience-paradise");
let fightEspers = localStorage.getItem("fight-other-espers");

document.getElementById("update-1").innerHTML = "Appointments remaining:" + " " + ordinaryExorcism;
document.getElementById("update-2").innerHTML = "Appointments remaining:" + " " + specialExorcism;
document.getElementById("update-3").innerHTML = "Appointments remaining:" + " " + superDeluxeExorcism;
document.getElementById("update-4").innerHTML = "Appointments remaining:" + " " + experienceParadise;
document.getElementById("update-5").innerHTML = "Appointments remaining:" + " " + fightEspers;