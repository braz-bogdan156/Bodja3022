function Employee(name,surname,baseSalary,experience){
    this.name = name;
    this.surname = surname;
    this.baseSalary = baseSalary;
    this.experience = experience;
}


function Designer(name, surname, baseSalary, experience, coef) {
    Employee.call(this, name, surname, baseSalary, experience);
    this.coef = coef;
}
function Manager(name, surname, baseSalary, experience, team) {
    Employee.call(this, name, surname, baseSalary, experience);
    this.team = team;
}
function Developer(name, surname, baseSalary, experience) {
    Employee.call(this,name, surname, baseSalary, experience);
}
Employee.prototype.getSalary = function () {
    let countedSalary = this.baseSalary;
    if (this.experience >= 2 && this.experience < 5) {
        countedSalary = countedSalary + 200;
    }
    else if (this.experience >= 5) {
        countedSalary = countedSalary * 1.2 + 500;
    }
    return countedSalary;
}
Employee.prototype.giveSalary = function () {
    console.log(this.name + ' ' + this.surname + ' got ' + this.getSalary() + ' shekeley ')
}
Designer.prototype = Object.create(Employee.prototype);
Designer.prototype.getSalary = function () {
    let countedSalary = Employee.prototype.getSalary.call(this);
    countedSalary *= this.coef;
    return countedSalary;
}

Developer.prototype = Object.create(Employee.prototype);

Manager.prototype = Object.create(Employee.prototype);

Manager.prototype.getSalary = function () {
    let countedSalary = Employee.prototype.getSalary.call(this);
    if (this.team.length >= 5 && this.team.length < 10) {
        countedSalary = countedSalary + 200;
    }
    else if (this.team.length >= 10) {
        countedSalary = countedSalary + 300;
    }
    let rabotnyky = 0;
    for (let i = 0; i < this.length; i++ ) {
        if (this.team[i] instanceof Developer) {
            rabotnyky++;
        }
}
    if (rabotnyky > (this.length / 2)) {
        countedSalary *= 1.1;
    }
    return countedSalary;
}
function Department() {
    this.managers = [];
}

Department.prototype.giveSalary = function () {
    this.managers.forEach(function (manager) {
        manager.giveSalary();
        manager.team.forEach(function (rabs) {
            rabs.giveSalary();
        });
    });
}
function main() {
    const devoper1 = new Developer("Cheburashka", "Kaplovuh", 850, 1);
    const devoper2 = new Developer("Fire", "Pig", 900, 3);
    const devoper3 = new Developer("Elephant", "Crocodilovich", 950, 12);
    const devoper4 = new Developer("Pobedytel", "Pojyzny", 950, 8);
    const devoper5 = new Developer("Slava", "Ukraine", 1000, 15);
    const designer1 = new Designer("Kill", "Embramovich", 1200, 1, 0.6);
    const designer2 = new Designer("Stefania", "Shock", 1400, 13, 0.8);
    const manager = new Manager("Imperator", "Neodolym", 2000, 40, [devoper1, devoper2, devoper3, devoper4,devoper5, designer1, designer2]);

    const departmen = new Department();
    departmen.managers.push(manager);
    departmen.giveSalary();
}


main();