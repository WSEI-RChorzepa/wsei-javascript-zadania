/* Zadanie 1
Stwórz konstruktor Person z następującymi właściwościami:

1. Imię
2. Nazwisko
3. Wiek
4. Kraj
5. Miasto
6. Język

Wszystkie te właściwości powinny pochodzić z parametrów przekazanych przez użytkownika w wywołaniu konstruktora. 
Następnie dopisz metody które będą modyfikować wiek oraz miasto. Pamiętaj o reużywalności kodu i oszczędzaniu pamięci. Wywołaj konstruktor Person na minimum 5 różnych osobach. 
Następnie zmień im wiek oraz miasto i sprawdź jak zachowują się obiekty. */
{
    console.log("---------- Zadanie 1 ----------");

    function Person(name, lastname, age, country, city, language) {
        this.name = name;
        this.lastname = lastname;
        this.age = age;
        this.country = country;
        this.city = city;
        this.language = language;
    }

    Person.prototype.setAge = function (value) {
        this.age = value;
    }

    Person.prototype.setCity = function (value) {
        this.city = value;
    }

    let person1 = new Person('John_1', 'Doe_1', 30, 'UK', 'London', "eng");
    let person2 = new Person('John_2', 'Doe_2', 30, 'UK', 'London', "eng");
    let person3 = new Person('John_3', 'Doe_3', 30, 'UK', 'London', "eng");
    let person4 = new Person('John_4', 'Doe_4', 30, 'UK', 'London', "eng");
    let person5 = new Person('John_5', 'Doe_5', 30, 'UK', 'London', "eng");

    person1.setAge(25);
    person1.setCity("New York");

    person3.setAge(44);
    person3.setCity('Cracov');

    console.log(person1);
    console.log(person2);
    console.log(person3);
    console.log(person4);
    console.log(person5);

    /* 
        Wywołanie konstruktora ( new ) spowodowało utworzenie nowych instancji obiektu Person.
        Każdy obiekt posiada odrębne właściwości, natomiast metody setAge oraz setCity zostały odziedziiczone z obiektu Person 
    */

}

/* Zadanie 2
Stwórz konstruktor kalkulatora z czterema podstawowymi działaniami. 
Konstruktor powinien posiadać pamięć operacji oraz metody do odpowiednich działań. 
Dopisz również metodę wypisującą zawartość pamięci oraz czyszczącą zawartość pamięci kalkulatora. 
Stwóz na podstawie konstruktora minimum dwa niezależne kalkulatory. */
{
    console.log("\n---------- Zadanie 2 ----------");

    function Calculator() {
        this.memory = null;
        this.history = [];
    }

    Calculator.prototype.addition = function (value) {
        this.memory += value;
    }

    Calculator.prototype.subtraction = function (value) {
        this.memory -= value;
    }

    Calculator.prototype.multiplication = function (value) {
        this.memory *= value;
    }

    Calculator.prototype.division = function (value) {
        this.memory /= value;
    }

    Calculator.prototype.showMemory = function () {
        console.log(`Memory: ${this.memory}`);
    }

    Calculator.prototype.clear = function () {
        this.memory = null;
        console.log('The memory has been cleard.');
    }

    let calculator_1 = new Calculator();
    let calculator_2 = new Calculator();

    console.log('\n-----Calculator 1-----');
    calculator_1.addition(10);
    calculator_1.addition(5);
    calculator_1.showMemory();

    calculator_1.subtraction(5);
    calculator_1.showMemory();

    calculator_1.multiplication(2);
    calculator_1.showMemory();

    calculator_1.division(3);
    calculator_1.showMemory();

    calculator_1.clear();
    calculator_1.showMemory();

    console.log('\n-----Calculator 2-----');
    calculator_2.addition(30);
    calculator_2.addition(30);
    calculator_2.showMemory(); 

    calculator_2.subtraction(12);
    calculator_2.showMemory();

    calculator_2.multiplication(3);
    calculator_2.showMemory();

    calculator_2.division(5);
    calculator_2.showMemory();

    calculator_2.clear();
    calculator_2.showMemory();

}


/* Zadanie 3( gra )
Stwórz konstruktor z dwoma metodami. Jedna co sekundę ma zminiać zawartość pola typu number na losową liczbę z zakresu 1-10. 
Druga ma sprawdzać czy liczba jest większa o 5. Jeśli tak to program ma zakończyć działanie. 
Obie metody muszą być wywołane na różnych obiektach i wymianiać dane przy pomocy pola prototype. */
{
    console.log("\n---------- Zadanie 3 ----------");

    function Game() {
        this.number = null;
        this.internal = null;
    };

    Game.prototype.setRandomValue = function () {
        this.internal = setInterval(() => {
            this.number = Math.floor((10) * Math.random());
            console.log(`Random value: ${this.number}`);
            this.checkRandomValue();
        }, 1000);
    };

    Game.prototype.checkRandomValue = function () {
        if (this.number === 5) {
            clearInterval(this.internal);
            console.log('END');
        };
    };

    let game = new Game();
    game.setRandomValue();

}