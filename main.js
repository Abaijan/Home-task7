// class Car {
//     constructor(title, model, color, maxSpeed, speed){
//         this.title = title;
//         this.model = model;
//         this.color = color;
//         this.maxSpeed = maxSpeed;
//         this.speed = speed;
//     }

//     _currentSpeed = 120;
//     currentSpeed(){
//         console.log(`Current Speed: ${this._currentSpeed}`);
//     }
//     gas(){
//         if(this._currentSpeed >= this.maxSpeed){
//             console.log(`Max speed on car ${this.title} ${this.model}: ${this.maxSpeed}`);
//         }else {
//             this._currentSpeed -= this.speed;
//             this.currentSpeed();
//         }
//     }
// }
// const bmw = new Car('BMW', 'X7', 'black', 320, 20);
// bmw.gas();
// bmw.gas();
// bmw.gas();
// bmw.gas();
// bmw.gas();
// bmw.gas();

// console.log(gas);
class User {
    constructor(name, surname, year) {
        this.name = name;
        this.surname = surname;
        this.year = year;
    }
 getfullName(){
    console.log(` Студента зовут: ${ this.name} ${this.surname} Он учиться на :`);
 }
    }

class Student extends User {
    constructor(name, surname, year) {
        super(name, surname, year)
    }

_year=2023;
    getYear(){
        console.log(`Ем курсе. Сейчас: ${this._year}ий год`);   
    }
    getCourse(){
      console.log(this._year-this.year );   
    }
}

 const men = new Student ('Василий ', 'Баранов', 2020)
men.getfullName()
men.getCourse()
men.getYear()