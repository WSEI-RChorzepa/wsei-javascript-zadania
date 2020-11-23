/* Zadanie 1
Stwórz w zmienne wstawiając do każdej z nich następujące dane i wyświetl je w konsoli:

* liczbę
* string
* liczbę + string np. (2 + "dwa")
* wartość logiczną
* wartość specjalną */
{
    console.log(" ---------- Zadanie 1 ----------");

    let number = 1;
    let message = "Lorem ipsum";
    let numberWithString = 2 + "Lorem ipsum";
    let result = 10 > 9;
    let specialValue = NaN;

    console.log(number);
    console.log(message);
    console.log(numberWithString);
    console.log(result);
    console.log(specialValue);
}

/* Zadanie 2
W konsoli stwórz następujące zmienne:
* dwie zmienne mają przechowywać dowolne liczby,
* ostatnia o nazwie ```sum``` ma przechowywać liczbę 0.

Następnie wypis w konsoli sumę dwóch pierwszych zmiennych przypisując wynik do zmiennej ```sum```. */
{
    console.log("\n  ---------- Zadanie 2 ----------");

    let number = 12;
    let number2 = 20;
    let sum = number + number2;
    console.log(`Suma: ${sum}`)
}

/* Zadanie 3
W konsoli stwórz zmienną i nic do niej nie przypisuj. Wypisz ją w konsoli i powiedz skąd taki wynik. */ 
{
    console.log("\n  ---------- Zadanie 3 ----------");

    let variable;
    console.log(variable); 
    /* Do zmiennej została przypisana wartość undefined ponieważ została zadeklarowana ale nie zainicjalizowana , dlatego też nie mają one wartości i są pustymi kontenerami*/
}