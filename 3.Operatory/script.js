/* Zadanie 1
W konsoli stwórz dwie zmienne i przypisz do nich dwie wartości boolean. Porównaj je za pomocą odpowiedniego operatora. */
{
    console.log(" ---------- Zadanie 1 ----------");

    let variable = true;
    let secondVariable = false;

    console.log(variable === secondVariable);
}

/* Zadanie 2
W konsoli stwórz trzy zmienne. Dwie niech przechowują dowolne liczby, a trzecia o nazwie ```moduloResult``` niech przechowuje liczbę 0. Oblicz resztę z dzielenia (modulo) tych liczb i zapisz wynik w zmiennej ```moduloResult```.
Wypisz zmienną ```moduloResult``` w konsoli.  */
{
    console.log(" \n---------- Zadanie 2 ----------");

    let variable = 20;
    let secondVariable = 3;
    let moduloResult = 0;

    moduloResult = variable % secondVariable;

    console.log(`ModuloResult: ${moduloResult}`);
}

/* Zadanie 3
W konsoli stwórz trzy zmienne. Dwie niech przechowują dowolne stringi, a jedna o nazwie ```stringsResult```, niech przechowuje pusty string np. ```let stringsResult = ""```
Połącz stringi za pomocą konkatenacji i zapisz wynik w zmiennej ```stringsResult``` oraz wypisz go w konsoli. */
{
    console.log(" \n---------- Zadanie 3 ----------");

    let variable = "Lorem";
    let secondVariable = "ipsum";

    let stringResult = variable + " " + secondVariable;

    console.log(`StringResult: ${stringResult}`);
}

/* Zadanie 4
W konsoli stwórz dwie zmienne:

 ``` JavaScript
var someNumber = 425;
var someString = "425";
 ```

Porównaj te zmienne za pomocą operatorów ```==``` oraz ```===```.
Wypisz wyniki w konsoli. Opowiedz grupie o wynikach */
{
    console.log(" \n---------- Zadanie 4 ----------");

    let someNumber = 425;
    let someString = "425";

    console.log(someNumber == someString); //Otrzymamy true ponieważ operator == w JS porównuje wartości i pomija typ danych.
    console.log(someNumber === someString); //Otrzymamy false ponieważ operator === w JS porównuje wartości oraz typ danych. 
}

/* Zadanie 5
W konsoli stwórz zmienną o nazwie ```counter```. Wstaw do niej liczbę 30.
Wypisz jej wartość w konsoli, a następnie:

* za pomocą inkrementacji zwiększ wartość zmiennej ```counter```
* wypisz ją w konsoli
* za pomocą dekrementacji zmniejsz wartość zmiennej ```counter```
* wypisz ją w konsoli. */
{
    console.log(" \n---------- Zadanie 5 ----------");

    let counter = 30;

    counter++;
    counter++;

    console.log(`Counter: ${counter}`);

    counter--;
    counter--;
    counter--;

    console.log(`Counter: ${counter}`);
}

/* Zadanie 6
W konsoli stwórz trzy zmienne. Dwie niech przechowują dowolne liczby, a jedna o nazwie ```result```, niech przechowuje ```null```.
Sprawdź czy liczba pierwsza jest większa od drugiej za pomocą odpowiedniego operatora i zapisz wynik w zmiennej ```result```. Wypisz tą zmienną w konsoli. */
{
    console.log(" \n---------- Zadanie 6 ----------");

    let variable = 10;
    let secondVariable = 12;
    let result = null;
    result = variable > secondVariable;
    console.log(`Result: ${result}`);
}