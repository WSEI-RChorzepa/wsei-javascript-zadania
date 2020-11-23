/* Zadanie 1
Stwórz obiekt car i dopisz do niego różne właściwości. Wypisz właściwości w konsoli. */

console.log("---------- Zadanie 1 ----------");

let car = {
    engineType: 'fuel engine',
    productionYear: 2019,
    price: 42.000,
    name: 'BWM'
}

for (let prop of Object.keys(car)) {
    console.log(`${prop}: ${car[prop]}`)
}

/* Zadanie 2
Na podstawie obiektu z zadania 1 dopisz do niego metodę zmieniającą jego dowolną właściwość na podstawie parametru przekazanego z wywołania metody. */
{
    console.log("\n---------- Zadanie 2 ----------");

    car.changeProperty = function(key, value) {
        if(car.hasOwnProperty(key)){
            car[key] = value;
        }
    }

    car.changeProperty('name', 'Skoda');
    console.log(`Result: ${car.name}`);

}

/* Zadanie 3
Stwórz obiekt z metodą sumującą wszystkie liczby z tablicy podanej w parametrze w wywołaniu tej metody. 
Następnie metoda ta powinna zapisywać wynik we właściwości sum tego obiektu. Na koniec wypisz właściwość sum w konsoli. */
{
    console.log("\n---------- Zadanie 3 ----------");

    let sum = {
        sumValues: function(array)  {
            sum.value = array.reduce((prev, next) => next + prev)
        },
        value: 0
    }

    sum.sumValues([1,2,3,4,5,6,7,9,10]);
    console.log(`Result: ${sum.value}`);
}

/* Zadanie 4
Stwórz obiekt car. Następnie wypisz w konsoli informacje na jego temat na podany poniżej wzór:

name: BMW
age: 12
... 

Czyli pary klucz wartość. */
{
    console.log("\n---------- Zadanie 4 ----------");

    let car = {
        engineType: 'fuel engine',
        productionYear: 2019,
        price: 42.000,
        name: 'BWM'
    }
    
    for (let prop of Object.keys(car)) {
        console.log(`${prop}: ${car[prop]}`)
    }
}

/* Zadanie 5
Stwórz dowolny obiek w obiekcie car. Następnie wypisz w konsoli jego właściwości. */
{
    console.log("\n---------- Zadanie 5 ----------");

    car.gearbox = {
        type: 'autoatic',
        gears: 6
    }

    for(let prop of Object.keys(car.gearbox)) {
        console.log(`${prop} : ${car.gearbox[prop]}`)
    }

}

/* Zadanie 6
Do obiektu car dodaj dowolną właściwość oraz metodę wypisującą w konsoli napis "Hello". Zrób to poza ciałem obiektu. */
{
    console.log("\n---------- Zadanie 6 ----------");

    car. color ="black",
    car.sayHello = function(){
        console.log("Hello");
    }

    car.sayHello();
}