function Student(name, gender, grade, GPA, detentions, sleepingInClass, catchPhrase) {
	this.name = name;
	this.gender = gender;
	this.grade = grade;
	this.GPA = GPA;
	this.detentions = detentions;
	this.sleepingInClass = sleepingInClass;
	this.catchPhrase = catchPhrase;
	this.canStudentHaveFun = function() {
		if (detentions < 10 && GPA > 2) {
			console.log(name + "can have fun!");
		}
	};
};

module.exports = Student;