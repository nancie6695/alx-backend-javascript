export class ALXClass {
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  get year() {
    return this._year;
  }

  get location() {
    return this._location;
  }
}
const class2019 = new Class(2019, 'San Francisco');
const class2020 = new ALXClass(2020, 'San Francisco');

export class StudentALX {
  constructor(firstName, lastName, ALXClass) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._ALXClass = ALXClass;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get ALXClass() {
    return this._ALXClass;
  }

  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._ALXClass.year} - ${this._ALXClass.location}`;
  }
}
const student1 = new StudentALX('Guillaume', 'Salva', class2020);
const student2 = new StudentALX('John', 'Doe', class2020);
const student3 = new StudentALX('Albert', 'Clinton', class2019);
const student4 = new StudentALX('Donald', 'Bush', class2019);
const student5 = new StudentALX('Jason', 'Sandler', class2019);
const listOfStudents = [student1, student2, student3, student4, student5];

export default listOfStudents;
