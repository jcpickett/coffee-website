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
let pricingElement = document.getElementById("coffeePrices-text");

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

function errorMessage(e){
    var nam = document.getElementById("submitName").value;
    var emai = document.getElementById("submitEmail").value;
    var mes = document.getElementById("submitMessage").value;

    if((nam === "") || (emai === "") || (mes === "") ){
        e.preventDefault();
        document.getElementById("error").innerHTML = "Please fill the rest in.";
    }
}

let request = new XMLHttpRequest();
request.addEventListener("load", processResponse);
request.open("GET", "https://api.tradingeconomics.com/markets/search/coffee?c=guest:guest&f=json");
request.send();
function processResponse (e) {
    console.log(JSON.parse(e.target.response));
    price = JSON.parse(e.target.response)[0].Last;
    pricingElement.innerHTML = price;
}






  