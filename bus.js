var Student = require("./student.js");

var Bus = function (driverName,color,gas) {

this.studentsOnTheBus = [];
this.driverName = driverName;
this.color = color;
this.gas = gas;

this.studentEntersBus = function (n, g, gr, GPA, d, s, c) {
  this.studentsOnTheBus.push(new Student(n, g, gr, GPA, d, s, c));
};

this.busChatter = function () {
	for (var i = 0; i < this.studentsOnTheBus.length; i++) {
		if(this.studentsOnTheBus[i].canStudentHaveFun() === true) {
			console.log(this.studentsOnTheBus[i].catchPhrase);
		};
	};
};

this.removeStudent = function() {
	prompt.start();
	prompt.get('name', function(err, result) {
		console.log("Name the Student You Would Like Removed:")
	});
	for(var i = 0; i < this.studentsOnTheBus.length; i++) {
		if(this.studentsOnTheBus[i]===result.name) {
			array.splice(i, 1);
		};
	};
};
};


module.exports = Bus;