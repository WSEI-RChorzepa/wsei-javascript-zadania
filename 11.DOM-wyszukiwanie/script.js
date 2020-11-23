/* Zadanie 1
Wyszukaj na stronie wszystkie elementy o klasie list i zapisz wynik do odpowiedniej zmiennej */
{
    console.log("---------- Zadanie 1 ----------");

    let lists = document.querySelectorAll('.list');
    console.info('lists', lists);
}


/* Zadanie 2
Stwórz funkcję która będzie zwracać elementy(tagi) na podstawie podstawie przesłanego parametru. 
Wynik działania funkcji zapisz do zmiennej i wyświetl w konsoli. */
{
    console.log("\n---------- Zadanie 2 ----------");

    function getTags(cssSelector) {
        return document.querySelectorAll(cssSelector);
    }

    let divs = getTags('div');
    console.info('getTags', divs);
}

/*  Zadanie 3
Znajdź na stronie element listy od id='list' i zapisz do odpowiedniej zmiennej.  */
{
    console.log("\n---------- Zadanie 3 ----------");

    let list = document.querySelector('#list');
    console.info('list', list);
}

/*  Zadanie 4
Napisz funkcje która będzie wypisywać w konsoli elementy przekazane w parametrze. Do funkcji przekaż następujące elementy:

1. wszystkie elementy li na stronie
2. wszystkie elementy ul na stronie
3. wszystkie spany na stronie
4. wszystkie spany znajdujące się w elemencie div z klasą list
5. wszystkie spany znajdujące się w elemencie div który posiada id='spans' */
{
    onsole.log("\n---------- Zadanie 4 ----------");

    function writeDomElements() {
        for (let argument of arguments) {
            console.log(argument);
        }
    }
    
    let liElements = document.querySelectorAll('li');
    let ulElements = document.querySelectorAll('ul');
    let spanElements = document.querySelectorAll('span');
    let nestedSpanElements = document.querySelectorAll('div.list > span');
    let nestedSpansInDivElements = document.querySelectorAll("#spans > span")
    
    writeDomElements(liElements, ulElements, spanElements, nestedSpanElements, nestedSpansInDivElements);
}
