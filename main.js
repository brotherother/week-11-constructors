var prompt = require('prompt');
var Student = require("./student.js");
var Bus = require("./bus.js");

prompt.start();

var studentName;
var studentGender;
var studentGrade;
var studentGPA;
var studentDetentions;
var studentSleeping;
var studentCatchPhrase;

prompt.get('name', function (err, result) {
	console.log('Enter Student Name:');
	studentName = result.name;
});

prompt.get('gender', function (err, result) {
	console.log('Enter Student Gender:');
	studentGender = result.gender;
});
prompt.get('grade', function (err, result) {
	console.log('Enter Student Grade:');
	studentGrade = result.grade;
});
prompt.get('gpa', function (err, result) {
	console.log('Enter Student GPA:');
	studentGPA = result.gpa;
});
prompt.get('detentions', function (err, result) {
	console.log('Enter Student Detentions:');
	studentDetentions = result.detentions;
});
prompt.get('sleeping', function (err, result) {
	console.log('Enter Student Sleeping In Class:');
	studentSleeping = result.sleeping;
});
prompt.get('catchphrase', function (err, result) {
	console.log('Enter Student Catch Phrase:');
	studentCatchPhrase = result.catchphrase;
});

var newStudent = new Student(studentName, studentGender, studentGrade, studentGPA, studentDetentions, studentSleeping, studentCatchPhrase);
newStudent.canStudentHaveFun();

var schoolBus = new Bus('John', 'red', 100);

schoolBus.studentEntersBus('RZA', 'male', 4, 3.2, 6, 3, 'The first person you have to resurrect is yourself.');
schoolBus.studentEntersBus('Ghostface', 'male', 6, 2.4, 3, 2, 'Why is the sky blue? Why is water wet? Why did Judas rat to the Romans while Jesus slept?');
schoolBus.studentEntersBus('Raekwon', 'male', 9, 4.0, 1, 1, 'Call me the rap assassinator / rhymes rugged and built like Schwarzenegger.');
schoolBus.studentEntersBus('Dirty', 'male', 4, 3.0, 5, 4, 'Ooh baby, I like it raw!');
schoolBus.studentEntersBus('Method Man', 'male', 7, 3.6, 5, 3, "I came to bring the pain hardcore from the brain.");
schoolBus.studentEntersBus('GZA', 'male', 1, 1.8, 4, 8, 'I got mouths to feed, Unnecessary beef is more cows to breed.');
schoolBus.studentEntersBus('Inspectha Deck', 'male', 5, 3.7, 1, 1, 'You stackin cheddar cause you working at the burger place.');
schoolBus.studentEntersBus('U-God', 'male', 6, 2.6, 4, 4, "I'm Sinatra, I'm Frank Sinatra in disguise");
schoolBus.studentEntersBus('Masta Killa', 'male', 3, 3.7, 1, 3, "War's extremely serious and it saddens me.");
schoolBus.studentEntersBus('Cappadonna', 'male', 11, 3.6, 1, 7, 'I stay dipped like the first day of school.');

schoolBus.busChatter();