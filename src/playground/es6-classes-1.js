class Person {
  constructor(name = "Anonymous", age = "secret") {
    this.name = name;
    this.age = age;
  }
  getGrettings() {
    return `Hi. I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += ` Their major is ${this.major}`;
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGrettings() {
    let grettings = super.getGrettings();
    if (this.homeLocation) {
      grettings += ` I am visiting from ${this.homeLocation}.`;
    }
    return grettings;
  }
}

const me = new Traveler("Simon Sicard", 32, "Saint Cloud");
// console.log(me);
console.log(me.getGrettings());
