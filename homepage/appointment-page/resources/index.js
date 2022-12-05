let ordinaryExorcism = localStorage.getItem("ordinary-exorcism");
let specialExorcism = localStorage.getItem("special-exorcism");
let superDeluxeExorcism = localStorage.getItem("super-deluxe-exorcism");
let experienceParadise = localStorage.getItem("experience-paradise");
let fightEspers = localStorage.getItem("fight-other-espers");
let count=0;

function onSubmit(){
    if(count>=1){
        alert("Hey, only one appointment per customer.");
        return;
    }
    else{
        count++;
    }
    var course = document.getElementById("service");
    const courseName = course.value;
    console.log(courseName);
    if(courseName == "ordinary-exorcism")
    {
        if(ordinaryExorcism > 0){
            document.getElementById("message").innerHTML = "The course you've selected is " + courseName+".";
            ordinaryExorcism--;
            localStorage.setItem('ordinary-exorcism', ordinaryExorcism);
        }
        else
            document.getElementById("message").innerHTML = "Unfortunately, "+ courseName +" is not available.";
    }
    else if(courseName == "special-exorcism")
   { 
        if(specialExorcism > 0){
            document.getElementById("message").innerHTML = "The course you've selected is " + courseName+".";
            specialExorcism--;
            localStorage.setItem('special-exorcism',specialExorcism);
        }
        else
            document.getElementById("message").innerHTML = "Unfortunately, "+ courseName +" is not available.";
    }
    else if(courseName == "super-deluxe-exorcism")
    { 
        if(superDeluxeExorcism > 0){
            document.getElementById("message").innerHTML = "The course you've selected is " + courseName+".";
            superDeluxeExorcism--;
            localStorage.setItem('super-deluxe-exorcism', superDeluxeExorcism);
        }
        else
            document.getElementById("message").innerHTML = "Unfortunately, "+ courseName +" is not available.";
    }
    else if(courseName == "experience-paradise") 
    {
        if(experienceParadise > 0){
            document.getElementById("message").innerHTML = "The course you've selected is " + courseName+".";
            experienceParadise--;
            localStorage.setItem('experience-paradise', experienceParadise);
        }
        else
            document.getElementById("message").innerHTML = "Unfortunately, "+ courseName +" is not available.";
    }
    else if(courseName == "fight-other-espers")
    {
        if(fightEspers > 0){
            document.getElementById("message").innerHTML = "The course you've selected is " + courseName+".";
            fightEspers--;
            localStorage.setItem('fight-other-espers', fightEspers);
        }
        else
            document.getElementById("message").innerHTML = "Unfortunately, "+ courseName +" is not available.";
    }
}
