/* Zadanie 1
Utwórz 2 obiekty person i person2. Niech posiadają następujące właściwości:

* Imię
* Nazwisko
* Wiek
* Kraj
* Miasto

Stwórz metody:

1. Która wypiszą wszystkie informacje o tej osobie
2. Która dodaje 1 rok do wieku za każdym jej wywołaniem

Następnie napisz kilka wywołań metody numer 2 w różnych kontekstach tak aby sprawdzić zasadę jej działania. */
console.log("---------- Zadanie 1 ----------");

function Person(name, lastname, age, country, city) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.country = country;
    this.city = city;
    this.favoriteDishes = [];
};

Person.prototype.getDetails = function () {
    for (let prop of Object.keys(this)) {

        if (typeof (this[prop]) !== 'function') {
            console.log(`${prop}: ${this[prop]}`)
        }

    }
};

Person.prototype.getAge = function () {
    console.log(this.age);
    this.age += 1;
}

let person = new Person('John', 'Doe', 30, 'UK', 'London');
let secondPerson = new Person('Clint', 'Estwood', 80, 'USA', 'New York');

console.log("\n---------- Person 2 ----------\n");
person.getDetails();
person.getAge();
person.getAge();
person.getDetails();

console.log("\n---------- Second person ----------\n");
secondPerson.getDetails();
secondPerson.getAge();
secondPerson.getAge();
secondPerson.getAge();
secondPerson.getDetails();


/* Zadanie 2
Rozszeż obiekty person i person2 z poprzedniego zadania o nowe pole typu tablicowego, które będzie przetrzymywać ulubione dania danej osoby. 
Następnie napisz metodę która będzie wypisywać w konsoli zawartość tego pola oraz metodę która będzie dodawać kolejne elementy do tego pola. 
Wszystkie te rzeczy mają znaleźć się poza pierwotnym ciałem obiektu */

    console.log("---------- Zadanie 2 ----------");

    Person.prototype.getFavoriteDishesh = function(){
        console.log(this.favoriteDishes);
    }

    Person.prototype.addFavoriteDish = function(name) {
        this.favoriteDishes.push(name)
    }

    let personWithDishes = new Person('John', 'Doe', 30, 'UK', 'London');
    personWithDishes.addFavoriteDish('Pasta');
    personWithDishes.addFavoriteDish('Buritto');
    personWithDishes.getFavoriteDishesh();

    personWithDishes.getDetails();

/* Zadanie 3
Napisz kalkulator który będzie miał funkcję dodawania, odejmowania, mnożenia i dzielenia. Potrzebne metody:
 
1. Metoda zapisująca liczby a i b w kontekście obiektu
2. Metoda sumująca wcześniej zapisane liczby
3. Metoda odejmująca wcześniej zapisane liczby
4. Metoda mnożąca wcześniej zapisane liczby
5. Metoda dzieląca wcześniej zapisane liczby. Jeśli liczba b = 0 to wypisz w konsoli odpowiedni komunikat błędu. */
{
    console.log("---------- Zadanie 3 ----------");

    function Calculator(){
        this.a = 0;
        this.b = 0;
    }

    Calculator.prototype.saveData = function(a, b) {
        this.a = a;
        this.b = b;
    }

    Calculator.prototype.addition = function () {
        return this.a + this.b;
    }

    Calculator.prototype.subtraction = function () {
        return this.a - this.b;
    }

    Calculator.prototype.multiplication = function () {
        return this.a * this.b;
    }

    Calculator.prototype.division = function () {
       if(this.b === 0){
           throw Error("Devide by zero exception")
       } else {
        return this.a / this.b;
       }
    }

    let calculator = new Calculator();
    calculator.saveData(10, 20);
    console.log(`Addition: ${calculator.addition()}`);
    console.log(`Subtraction: ${calculator.subtraction()}`);
    console.log(`Multiplication: ${calculator.multiplication()}`);
    console.log(`Division: ${calculator.division()}`);

}

/* Zadanie 4
Stwórz prosty symulator wchodzenia i schodzenia z drabiny. Potrzebne będą trzy metody. Zastanów się jakie? */
{
    console.log("---------- Zadanie 4 ----------");

    function Simulator(steps){
            this.steps = steps;
    }

    Simulator.prototype.goUp = function() {
        console.log('Going up');
        for (let index = 1; index <= this.steps; index++) {
            console.log(`Step: ${index}`)    
        }
    }

    Simulator.prototype.goDown =  function() {
        console.log('Going down');
        for (let index = this.steps; index >= 1; index--) {
            console.log(`Step: ${index}`)    
        }
    }

    let simulator = new Simulator(10);
    simulator.goUp();
    simulator.goDown();

}