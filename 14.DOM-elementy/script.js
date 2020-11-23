/* Zadanie 1
Stwórz funkcję do której przekażesz jako parametr listę elementów o klasie more-divs. 
Następnie zwróć z tej funkcji tablicę tagów utworzoną na podstawie przekazanego parametru. Wynik wyświetl w konsoli. */
{
    console.log("---------- Zadanie 1 ----------");

    function func(divs) {
        console.info('divs', Array.from(divs))
    }

    func(document.querySelectorAll('.more-divs'));
}

/* Zadanie 2
Stwórz funkcję i przekaż do niej jako parametr element short-list. Następnie wyświetlw konsoli:

1. Kod html wewnętrzny
2. kod html zewnętrzy
3. listę klass elementu w postaci stringu
4. listę klass elementu w postaci tablicy
5. obiekt dataset */
{
    console.log("\n---------- Zadanie 2 ----------");

    function func(list) {
        console.info('inner html', list.innerHTML);
        console.info('outer html', list.outerHTML);
        console.info('class list', list.classList.toString());
        console.info('class array', Array.from(list.classList));
        console.info('dataset', list.dataset);
    }

    func(document.querySelector('.short-list'));
}

/* Zadanie 3
Stwórz funkcję która zwracać będzie wynik dodawania oraz odejmowania liczb pobranych z przekazanych parametrów. Liczby te muszą pochodzić z atrybutów data elementu o id datasetCheck */
{
    console.log("\n---------- Zadanie 3 ----------");

    function func() {
        let dataset = document.querySelector('#datasetCheck').dataset;
        let numbers = [];

        for (let key in dataset) {
            let value = parseInt(dataset[key]);

            if (!isNaN(value)) {
                numbers.push(value);
            }
        }

        console.info('addition', numbers.reduce((a, b) => b + a, 0));
        console.info('subtraction', numbers.filter(a => a !== numbers[0]).reduce((a, b) => a - b, numbers[0]));
    }

    func();
}

/* Zadanie 4
Zmień tekst w elemencie o id spanText na dowolny */
console.log("\n---------- Zadanie 4 ----------");

document.querySelector('#spanText').innerText = 'Dowolny tekst';

/* Zadanie 5
Zmień klasę elementowi o id spanText na dowolną */

console.log("\n---------- Zadanie 5 ----------");

document.querySelector('#spanText').classList.add('newClass');

/* Zadanie 6
Napisz funkcję która przyjmie jako parametr listę klass elementu o id classes. Następnie funkcja powinna wypisać w konsoli pojedynczo wszystkie klasy a na końcu wyświetlić string z połączonych klass znakiem '+'. 
Następnie usuń wszystkie klasy temu elementowi i wypisz w konsoli tekst: "Usunięto wszystkie klasy".  */
{
    console.log("\n---------- Zadanie 6 ----------");

    function func(classList) {
        classList.forEach(function (value) {
            console.info('class: ', value);
        });

        console.info('class: ', classList.join(' + '));

        document.querySelector('#classes').classList = [];
        console.log('Usunięto wszystkie klasy');

    }

    func(Array.from(document.querySelector('#classes').classList));
}

/* Zadanie 7
Znajdź wszystkie elementy li w elemencie longList. Przekaż te elementy do funkcji której zadaniem będzie dodanie każdemu elementowi li atrybutu data-text="text" ale tylko tym elementom w których taki data atrybut nie istnieje. */
{
    console.log("\n---------- Zadanie 7 ----------");

    function func() {
        let elements = document.querySelectorAll('#longList li');

        function updateDataAttribute(elements) {
            elements.forEach(function (elem) {
                if (!elem.hasAttribute('data-text')) {
                    elem.setAttribute('data-text', 'text');
                }
            });
        };

        updateDataAttribute(elements);

    }

    func();
};

/* Zadanie 8
Napisz funkcję która będzie przyjmować parametr typu string. Następnie string ten zapisz w postaci obiektu:

{
    newClass: 'string_z_parametru'
}

Obiekt ten przekaż do drugiej funkcji w której odczytasz string z obiektu i przypisz go do zmiennej. Następnie ustaw taką klasę elementowi o id myDiv. */
{
    console.log("\n---------- Zadanie 8 ----------");

    function func() {

        function setClassObject(className) {
            return ({
                newClass: className
            })
        };

        function setClass({ newClass }) {
            let elment = document.querySelector('#myDiv');
            elment.classList.add(newClass);
        };

        setClass(setClassObject('WSEI'));

    }

    func();
}

/* Zadanie 9
Napisz funkcję która będzie dodawać odpowiednią klasę do elementu o id "numbers" w zależności od przekazanego parametru. Parametr powinien być losową liczbą z zakresu 0-10. 
Jeśli liczba będzie parzysta ustaw klasę 'even' jak nieparzysta 'odd; */
{
    console.log("\n---------- Zadanie 9 ----------");

    function func() {
        let elem = document.querySelector('#numbers');
    
        Math.floor(Math.random() * 10) % 2
            ? elem.classList.add('odd')
            : elem.classList.add('even')
    };
    
    func();
}

/* Zadanie 10
Napisz funkcję do której przekaż element o id "longList". Następnie zwróć tablicę wypełnioną wartościami pobranymi z elementów ten listy. */
{
    console.log("\n---------- Zadanie 10 ----------");

    function func(elem) {
        let values = Array.from(document.querySelector(elem).children).map(a => a.textContent)
    
        console.info('values', values);
    };
    
    func(document.querySelector('#longList'));
}


/* Zadanie 11
Napisz funkcję do której przekażesz listę dzieci elementu o id longList. Następnie zamień wszystkie wartości tych elementów na losowe liczby z zakresu 0-10 jednocześnie przechowując starą wartość w data atrybucie. */
{
    console.log("\n---------- Zadanie 11 ----------");

    function func(elements) {
        Array.from(elements).forEach(function (el) {
            el.setAttribute('data-value', el.innerText);
            el.innerText = Math.floor(Math.random() * 10);
        });  
    };
    
    func(document.querySelector('#longList').children);
}
