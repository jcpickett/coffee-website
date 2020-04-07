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