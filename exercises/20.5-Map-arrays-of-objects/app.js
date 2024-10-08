let people = [
	{ name: 'Joe', birthDate: new Date(1986,10,24) },
	{ name: 'Bob', birthDate: new Date(1975,5,24) },
	{ name: 'Erika', birthDate: new Date(1989,6,12) },
	{ name: 'Dylan', birthDate: new Date(1999,12,14) },
	{ name: 'Steve', birthDate: new Date(2003,4,24) }
];



let simplifier = function(person) {
	// Your code here
	let currenYear = new Date()
	let year = currenYear.getFullYear() - person.birthDate.getFullYear();
	let month = currenYear.getMonth() - person.birthDate.getMonth();
	let day = currenYear.getDate() - person.birthDate.getDate();
	

	if (month < 0 || (month === 0 && day < 0)) {
		year--;
	}

	return `Hello, my name is ${person.name} and I am ${year} years old`;
};


console.log(people.map(simplifier));
