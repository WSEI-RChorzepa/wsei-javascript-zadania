/* Zadanie 1
Stwórz tablicę z dowolnymi elementami a następnie wypisz je w konsoli. */
{
    console.log("---------- Zadanie 1 ----------");

    let array = ['a', 'b', 'c', 'd', 'e', 'f'];
    console.log(array.join(', '));
}

/* Zadanie 2
Stwórz tablicę z dowolnymi elementami a następnie w konsoli wypisz:

1. Pierszy i drugi element
2. Ostatni element
3. Wszystkie elementy
4. Co drugi element
5. Wszystkie stringi
6. Wszystkie numbery  */
{
    console.log("\n---------- Zadanie 2 ----------");

    let array = ['a', 'b', 'c', 'd', 'e', 'f', 4, 1, 4, 7, 9];

    let firstAndSecond = [array[0], array[1]].join(', '),
        all = array.join(', '),
        eachSecond = array.filter((el, index) => index % 2).join(', '),
        strings = array.filter((el) => typeof (el) === 'string').join(', '),
        numbers = array.filter((el) => typeof (el) === 'number').join(', ');

    console.log(`First and second: ${firstAndSecond}`);
    console.log(`All: ${all}`);
    console.log(`Each second: ${eachSecond}`);
    console.log(`All strings: ${strings}`);
    console.log(`All numbers: ${numbers}`);
}

/* Zadanie 3
Stwórz tablicę tylko z elementami typu number. W konsoli wypisz:

1. sumę wszystkich elementów
2. różnicę wszystkich elementów
3. średnią wszystkich elementów
4. elementy parzyste
5. elementy nieparzyste
6. największą liczbę
7. najmniejszą liczbę
8. wypisz tablicę od tyłu

* nie rozpatrujemy warunków brzegowych. Liczby nie powtarzają się.
** Nie używamy obiektu Math */
{
    console.log("\n---------- Zadanie 3 ----------");

    let array = [20, 10, 5, 8];

    let sum = array.reduce((prev, next) => next + prev, 0),
        diff = array.filter(a => a !== array[0]).reduce((prev, next) => prev - next, array[0]),
        avg = array.reduce((prev, next) => next + prev, 0) / array.length,
        even = array.filter(el => el % 2 === 0),
        odd = array.filter(el => el % 2 !== 0),
        max = [...array].sort((a, b) => a - b)[array.length - 1],
        min = [...array].sort((a, b) => a - b)[0],
        revers = array.reverse();

    console.log(`Sum: ${sum}`);
    console.log(`Difference: ${diff}`);
    console.log(`Avg: ${avg}`);
    console.log(`Even: ${even}`);
    console.log(`Odd: ${odd}`);
    console.log(`Max: ${max}`);
    console.log(`Min: ${min}`);
    console.log(`Reverse: ${revers}`);

}

/* Zadanie 4
Napisz funkcję która przyjmie jako parametr tablice liczb. Zwróć do konsoli sumę wszystkich liczb. */
{
    console.log("\n---------- Zadanie 4 ----------");

    function func(array) {
        return array.reduce((prev, next) => next + prev);
    }

    let result = func([1,2,3,4,5,6,7,8,9, 20]);
    console.log(`Result: ${result}`);

}

/* Zadaie 5
Napisz funkcję która przyjmuje jako parametr tablicę liczb. Następnie wypisz w konsoli wszystkie elementy tej tablicy pomnożone przez średnią tablicy */
{
    console.log("\n---------- Zadanie 5 ----------");

    function func(array) {
        let avg = array.reduce((a, b) =>  a  + b, 0) / array.length
        return [array.map(el => el  * avg)]; 
    }

    let result = func([1,2,3,4,5,6,7,8,9, 20]);
    console.log(`Result: ${result}`);

}

/* Zadanie 6
Napisz funkcję która zwraca średnią liczb parzystych z tablicy którą przekażesz jako parametr tej funkcji. */
{
    console.log("\n---------- Zadanie 6 ----------");

    function func(array) {
        let evenElements = array.filter(a=> a % 2 === 0);
        return evenElements.reduce((a, b) => a + b , 0) / evenElements.length;
    }

    let result = func([1,2,3,4,5,6,7,8,9, 20]);
    console.log(`Result: ${result}`);
}

/* Zadanie 7
Posortuj tablicę przekazaną jako parametr do funkcji. Wypisz ją w konsoli */
{
    console.log("\n---------- Zadanie 7 ----------");

    function func(array) {
        return array.sort((a, b) => a -b);
    }

    let result = func([3,2,1,4,5,20,7,8,9, 6]);
    console.log(`Result: ${result}`);
}

/* Zadanie 8
Napisz funkcję która będzie zwracać tablicę która będzie sumą indeksów dwóch tablic przekazanych jako parametry funkcji. */
{
    console.log("\n---------- Zadanie 8 ----------");

    function func(array, secondArray) {
        let indexes = [];
        array.map((a, index) => indexes.push(index));
        secondArray.map((a, index) => indexes.push(index));

        return indexes;
    }

    let result = func([3,2,1,4,5,20,7,8,9, 6], [2,4,5]);
    console.log(`Result: ${result}`);

}

/* Zadanie 9
Napisz funkcję która przyjmuje jako parametr tablicę z numberami a następnie zwraca nową tablicę na podstawie parametru gdzie każdy element tablicy ma odwrotny znak. */
{
    console.log("\n---------- Zadanie 9 ----------");

    function func(array, sign) {
        return array.map(a => `${a}-${sign}` )
    }

    let result = func([3,2,1,4,5,20,7,8,9, 6], 'a');
    console.log(`Result: ${result}`);
}