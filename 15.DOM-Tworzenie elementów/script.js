/* Zadanie 1
Stwórz i dodaj do strony element div wraz z tekstem: "To jest nowy element"; */
{
    console.log("---------- Zadanie 1 ----------");

    function func() {
        let div = document.createElement('div');
        div.innerText = 'To jest nowy element';
    
        document.querySelector('body').appendChild(div);
    };
    
    func();
}

/* Zadanie 2
Stwórz odpowiednie elementy i dodaj do strony listę ulubionych owoców (minimum 6) */
{
    console.log("---------- Zadanie  ----------");

    function func() {
        let fruits = ['apples', 'oranges', 'grapefruits', 'mandarins', 'limes', 'bananas', 'plums'];
        let ul = document.createElement('ul');
        ul.setAttribute('id', 'fruits');
    
        fruits.forEach(function (fruit) {
            let li = document.createElement('li');
            li.innerText = fruit;
            ul.appendChild(li);
        });
    
        document.querySelector('body').appendChild(ul);
    
    };
    
    func();
}

/* Zadanie 3
Na podstawie listy z zadanie 2 stwórz event który usunie z tej listy co drugi element. */
{
    console.log("---------- Zadanie 3 ----------");

    function func() {
        document.addEventListener('DOMContentLoaded', function () {
            let fruits = document.querySelectorAll('#fruits > li:nth-child(even)');
            fruits.forEach((fruit) => fruit.remove());
        });
    };
    
    func();
}


/* Zadanie 4
Dodaj do strony button po kliknięciu na button ma on się usuwać ze strony. */
{
    console.log("---------- Zadanie 4 ----------");

    function func() {
        let button = document.createElement('button');
        button.innerText = 'Remove';
    
        button.addEventListener('click', function () {
            this.remove();
        });
    
        document.querySelector('body').appendChild(button);
    };
    
    func();
}

/* Zadanie 5
Na podstawie losowej liczby utwórz odpowiednią ilość divów z tekstem: "to jest div numer ${numer}" */
{
    console.log("---------- Zadanie 5 ----------");

    function func() {
        var randomNumber = Math.floor(Math.random() * 10);
    
        let df = document.createDocumentFragment();
    
        for (let value = 0; value <= randomNumber; value++) {
            let div = document.createElement('div');
            div.innerText = `to jest div: ${value}`;
            div.style.border = '1px solid #ccc';
            div.style.padding = '5px';
            div.style.margin = '5px 0';
            df.appendChild(div);
        }
    
        document.querySelector('body').appendChild(df);  
    };
    
    func();
}

/* Zadanie 6
Na podstawie obiektu stwórz struktórę w html
{
    div1: 'to jest div',
    span1: 'to jest span',
    div2: {
        div3: 'to jest div',
    },
    span2: 'to jest span',
} */
{
    console.log("---------- Zadanie 6 ----------");

    function func() {
        let structure = {
            div1: 'to jest div',
            span1: 'to jest span',
            div2: {
                div3: 'to jest div',
            },
            span2: 'to jest span',
        };
    
        let main = document.createElement('ul');
    
        function createElement(root, main){
            for(let node in root) {
                if(typeof(root[node]) === 'object') {
                    let newRoot = document.createElement('ul');
                    createElement(root[node], newRoot);
                } else {
                   let li = document.createElement('li');
                   li.innerText =  node + ' ' + root[node]
                   main.appendChild(li);
                }
            }
        };
    
        createElement(structure, main);
        document.querySelector('body').appendChild(main);
    
    };
    
    func();
}

/* Zadanie 7
Stwórz dwie listy. W jednej umieść minim 6 elementów. Druga niech będzie pusta. Pod każdą z list dodaj button. Po kliknięciu na button pod listą ostatni element listy ma być przeniesiony do drugiej listy. 
Jeśli w danej liście nie ma żadnych elementów to button ma być zablokowany przy pomocy atrybutu disabled; */
{
    console.log("---------- Zadanie 7 ----------");
}

/* Zadanie 8
Stwórz formularz do którego będzie można wpisać jaki element user chce utworzyć, z jakim tekstem, z kolorem tekstu i ile razy ma być ten element powtórzony na stronie. 
Po kliknięciu na button "Utwórz" formularz powinien tworzyć taką strukturę. */
{
    console.log("---------- Zadanie 8 ----------");
}

/* Zadanie 9
Stwórz formularz do którego będzie można wpisać dane tabelarczne takie jak:

1. Imię
2. Nazwisko
3. Wiek
4. Ilość dzieci

Formularz powinien mieć możliwość dodawania kilku takich pozycji po kliknięciu na button "Więcej". 
Po kliknieciu na "Utwórz" powinna utworzyć się tabela z odpowiednimi headerami oraz wypełnionymi danymi z formularza. Na końcu każdej lini powinien być button "Usuń" który usuwa daną linijkę. */
{
    console.log("---------- Zadanie 9 ----------");
}

/* Zadanie 10
Na podstawie powyższego zadania stwórz funkcję która sprawdzi wszystkie stringi wpisane i zamieni pierwsze ich litery na duże. */
{
    console.log("---------- Zadanie 10 ----------");
}

/* Zadanie 11
Stwóz funkcję która będzie przyjmować dowolny string. Sprawdź czy występują w nim liczby. Jeśli tak to podaj w konsoli ich sumę. Dodatkowo stwórz tyle divów z tym tekstem ile wynosi iloczyn tych liczb. */
{
    console.log("---------- Zadanie 11----------");
}

/* Zadanie 12
Stwórz funkcję która przyjmuje dowolnego stringa. Następnie Wrzuć tego strina do obiektu pod dowolnym polem. 
Dopisz metodę do obiektu która będzie sprawdzać czy w tekście występuje string 'Ala' i jeśli tak to zamieni go na 'Ola'. 
Jeśli tekst nie występuje to niech utworzy odpowiedniego diva i doda do niego tekst "Słowo Ala nie występuje w tekście." */
{
    console.log("---------- Zadanie 12 ----------");
}

/* Zadanie 13
Stwórz funkcję która przyjmie tablicę stringów. Funkcja ma zwrócić nową tablicę z ilością liter w strinach. 
Druga funkcja ma zsumować wszystkie liczby z tablicy i zwrócić wynik. Trzecia funkcja ma wyciągnąć średnią z liczb i zwrócić wynik. */
{
    console.log("---------- Zadanie13 ----------");
}

/* Zadanie 14 
Stwórz obiekt z 3 polami:
{
    name: '',
    surname: '',
    age: ''
}

Następnie stwóz funkcję (nie metodę) która przypisuje nowe wartości do tych pól oraz tworzy nowe pola z długością stringów. 
Jeśli któyś ze stringów będzie dłuższy niż 5 to stwórz w html button po kliknięciu którego cały obiekt wróci do stanu początkowego. */
{
    console.log("---------- Zadanie 14 ----------");
}