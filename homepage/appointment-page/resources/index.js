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
        ordinaryExorcism--;
        localStorage.setItem('ordinary-exorcism', ordinaryExorcism);
        if(ordinaryExorcism > 0)
            document.getElementById("message").innerHTML = "The course you've selected is " + courseName+".";
        else
            document.getElementById("message").innerHTML = "Unfortunately, "+ courseName +" is not available.";
    }
    else if(courseName == "special-exorcism")
   { 
        specialExorcism--;
        localStorage.setItem('special-exorcism',specialExorcism);
        if(specialExorcism > 0)
            document.getElementById("message").innerHTML = "The course you've selected is " + courseName+".";
        else
            document.getElementById("message").innerHTML = "Unfortunately, "+ courseName +" is not available.";
    }
    else if(courseName == "super-deluxe-exorcism")
    { 
        superDeluxeExorcism--;
        localStorage.setItem('super-deluxe-exorcism', superDeluxeExorcism);
        if(superDeluxeExorcism > 0)
            document.getElementById("message").innerHTML = "The course you've selected is " + courseName+".";
        else
            document.getElementById("message").innerHTML = "Unfortunately, "+ courseName +" is not available.";
    }
    else if(courseName == "experience-paradise") 
    {
        experienceParadise--;
        localStorage.setItem('experience-paradise', experienceParadise);
        if(experienceParadise > 0)
            document.getElementById("message").innerHTML = "The course you've selected is " + courseName+".";
        else
            document.getElementById("message").innerHTML = "Unfortunately, "+ courseName +" is not available.";
    }
    else if(courseName == "fight-other-espers")
    {
        fightEspers--;
        localStorage.setItem('fight-other-espers', fightEspers);
        if(fightEspers > 0)
            document.getElementById("message").innerHTML = "The course you've selected is " + courseName+".";
        else
            document.getElementById("message").innerHTML = "Unfortunately, "+ courseName +" is not available.";
    }
}