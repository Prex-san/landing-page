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

function hover(element,num) {
    switch(num){
        case 1:
            element.setAttribute('src', '../../resources/salt.gif');
            break;
        case 2:
            element.setAttribute('src', '../../resources/reigen-massage.gif');
            break;
        case 3:
            element.setAttribute('src', '../../resources/Reigenknee.webp');
            break;
        case 4:
            element.setAttribute('src', '../../resources/special-massage.gif');
            break;
        case 5:
            element.setAttribute('src', '../../resources/dropkick.gif');
            break;
    }
  }
  
  function unhover(element,num) {
    switch(num){
        case 1:
            element.setAttribute('src', '../../resources/salt-punch.webp');
            break;
        case 2:
            element.setAttribute('src', '../../resources/massage.jpg');
            break;
        case 3:
            element.setAttribute('src', '../../resources/knee-kick.jpg');
            break;
        case 4:
            element.setAttribute('src', '../../resources/special-massage.jpg');
            break;
        case 5:
            element.setAttribute('src', '../../resources/esper-kick.webp');
            break;
    }
  }