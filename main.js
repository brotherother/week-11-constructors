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



prompt.get(['name', 'gender', 'grade', 'gpa', 'detentions', 'sleeping', 'catchphrase'], function (err, result) {
	studentName = result.name;
	studentGender = result.gender;
	studentGrade = result.grade;
	studentGPA = result.gpa;
	studentDetentions = result.detentions;
	studentSleeping = result.sleeping;
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