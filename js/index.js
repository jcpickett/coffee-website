console.log("One of my favorite flavors of coffee is sand.");

let courseTitle = "Intro to Web Development";
let courseLength = "8 weeks";

console.log(courseTitle);
console.log(courseLength);

let courseAttendees = ["Anskey", "Terri", "Kat", "Annagray"];

console.log(courseAttendees);
console.log(courseAttendees[0]);

let skills = ["Water-Bending", "Coffee", "Breathing"];

console.log(skills);

skills[0] = "Air-Bending";
skills[3] = "Witchcraft";

let course = {
    title: "Intro to Data Science",
    duration: "8 weeks",
    attendees: ["Anskey", "Terri", "Kat", "Annagray"]
}

console.log(course);
console.log(course.title);

let me = {
    firstName: "Christopher",
    lastName: "Pickett",
    age: "19",
    skills: skills
}

console.log(me);
console.log(me.firstName);
console.log(me.skills);

me.nickname = "Chris";
me.skills[4] = "Time-Travel";

console.log(me);

let scrollElement = document.getElementById("scroll");
let textElement = document.getElementsByClassName("text-width");
let submitElement = document.getElementById("submitt");

scrollElement.addEventListener("click", scrollToTop);
window.addEventListener("scroll", scrollHider);
submitElement.addEventListener("click", errorMessage);


function scrollToTop(){
    window.scrollTo(0, 0);
}
function scrollHider(){
    if(window.scrollY === 0){
        scrollElement.style.display = "none";
    }
    else{
        scrollElement.style.display = "block";
    }
}

function errorMessage(){
    var nam = document.getElementById("submitName").nodeValue;
    var emai = document.getElementById("submitEmail").nodeValue;
    var mes = document.getElementById("submitMessage").nodeValue;

    if((nam === "") || (emai === "") || (mes === "") ){
        submitElement.preventDefault();
    }
}


  