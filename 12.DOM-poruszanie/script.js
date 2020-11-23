/* Zadanie 1
Wypisz w konsoli:

1. Rodzica elementu id="buz"
2. Brata elementu id="baz"
3. Dzieci elementu id="foo"
4. rodzica elementu id"foo"
5. pierwsze dziecko elementu id="foo"
6. środkowe dziecko elementu id="foo" */
{
    console.log("---------- Zadanie 1 ----------");

    let buzParent = document.querySelector('#buz').parentNode;
    console.info('buzParent', buzParent);

    let bazSibling = document.querySelector('#baz').previousElementSibling;
    console.info('bazSibling', bazSibling);

    let fooChildren = document.querySelector('#foo').children;
    console.info('fooChildren', fooChildren);

    let fooFirstChild = document.querySelector('#foo').firstElementChild;
    console.info('fooFirstChild', fooFirstChild);

    let fooMidleChild = document.querySelector('#foo > div:nth-child(2)');
    console.info('fooFirstChild', fooMidleChild);
}

/* Zadanie 2
Napisz funkcję która przyjmie jako parametr element id="ex2". Następnie doda nasłuchiwanie eventu click na tym elemencie. Jeśli czerwony kwadrat zostanie kliknięty pobierz tekst z wewnętrzego diva tego elementu i wyświetl go w konsoli. */
{
    console.log("---------- Zadanie 2 ----------");

    function func(id) {
        document.querySelector(`#${id}`)
            .addEventListener('click', function (e) {
                let text = e.target.querySelector('div> div:nth-child(2) > div > div ').textContent;
                console.log(text);
            });
    }
    
    func('ex2');
}


/* Zadanie 3
Napisz funkcję która doda na każdym buttonie w div id="ex3" ten sam event kliknięcia. Zadaniem eventu będzie odsłanianie lub ukrywanie elementu span obok buttona. */
{
    console.log("---------- Zadanie 3 ----------");

    function func() {
        let buttons = document.querySelectorAll('#ex3 > div > button');
    
        for (let button of buttons) {
            button.addEventListener('click', function (e) {
                let span = e.target.nextElementSibling;
    
                if (span.style.display === 'none') {
                    span.style.display = 'block'
                } else {
                    span.style.display = 'none'
                }
    
            });
        }
    };
    
    func();
}

/* Zadanie 4
Dodaj event na buttony z zadania 3 tak aby po kliknięciu na dowolny z nich ich rodzic zmieniał kolor na dowolny. Całość zapisz w funkcji. 
Losowy kolor:
var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16); */
{
    console.log("---------- Zadanie 4 ----------");

    function func() {
        let buttons = document.querySelectorAll('#ex3 > div > button');
    
        for (let button of buttons) {
            button.addEventListener('click', function (e) {
                e.target.style.background = "#" + Math.floor(Math.random() * 16777215).toString(16);
            })
        }
    }
    
    func();
}

/* Zadanie 5
W div id="ex5" znajdują się trzy prostokąty. Po najechaniu na dowolny z nich elementy na liście powinny zmienić swój background-color na taki jak prostokąt ale według poniższych punktów: 

1. Tylko pierwszy element listy
2. tylko ostatni element listy
3. Parzyste elementy listy
4. Wszystkie elementy listy
5. Żaden z elementów - tylko cała lista */
{
    console.log("---------- Zadanie 5 ----------");

    function func(cssSelector) {
        let rectangles = document.querySelectorAll('#ex5 > div');
    
        rectangles.forEach(function (rectangle) {
            let backgroundColor = rectangle.style.backgroundColor;
    
            rectangle.addEventListener('mouseenter', function () {
                document.querySelectorAll(`#ex5 ${cssSelector}`).forEach(function (li) {
                    li.style.backgroundColor = backgroundColor;
                });
            });
        });

    };
    
    func('ul > li:first-child');
    // func('ul > li:last-child');
    // func('ul > li:nth-child(even)');
    // func('ul > li');
    // func('ul');
}

/* Zadanie 6
W div id="ex6" zaczynając od tego diva znajdź i zapisz do zmiennych następujące kombinacje:

1. pierwsze dziecko -> pierwsze dziecko -> pierwsze dziecko
2. pierwsze dziecko -> rodzic -> pierwsze dziecko -> pierwsze dziecko -> brat -> rodzic
3. rodzic -> pierwsze dziecko -> rodzic -> drugie dziecko -> pierwsze dziecko -> pierwsze dziecko -> pierwsze dziecko */
{
    console.log("---------- Zadanie 6 ----------");

    function func() {
        let container = document.querySelector('#ex6');
    
        let firstChild = container
            .firstElementChild
            .firstElementChild;
    
        let parent = container
            .firstElementChild
            .parentElement
            .firstElementChild
            .firstElementChild
            .nextElementSibling
            .parentElement;
    
        let firstChild_2 = container
            .parentElement
            .firstElementChild
            .parentNode
            .children[1]
            .firstElementChild
            .firstElementChild
            .firstElementChild
    
    
        console.info('firstChild', firstChild);
        console.info('parent', parent);
        console.info('firstChild_2', firstChild_2)
    }

    func();
}


