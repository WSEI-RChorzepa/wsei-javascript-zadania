const appendExercise = function (text, content) {
    let div = document.createElement('div');

    div.style.border = '1px solid RGBA(0,0,0, .1)';
    div.style.padding = '5px';
    div.style.margin = '10px 0';

    let title = document.createElement('div');
    title.style.backgroundColor = 'RGBA(0,0,0, .1)';
    title.style.padding = '5px';
    title.style.marginBottom = '10px';
    title.innerHTML = text;

    div.appendChild(title);
    div.appendChild(content);

    document.querySelector('#root').appendChild(div);
}

const createFormElement = function (text, name, type) {
    let div = document.createElement('div',)
    label = document.createElement('label'),
        input = document.createElement('input');

    div.style.padding = '2px';
    div.style.display = 'flex';
    div.style.justifyContent = 'space-between';

    label.innerHTML = text;
    input.setAttribute('type', type);
    input.setAttribute('name', name);

    div.appendChild(label);
    div.appendChild(input);

    return div;
};

const regexResult = function(string, regex){
    let values = [];
    let result;
    
    while ((result = regex.exec(string)) !== null) {
        if (result.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        result.forEach((match) => {
            if(match.length) {
                values.push(match);
            }
        });
    }

    return values;
};

/* Zadanie 1
Stwórz i dodaj do strony element div wraz z tekstem: "To jest nowy element"; */
{
    function func() {
        let div = document.createElement('div');
        div.innerText = 'To jest nowy element';

        appendExercise('Zadanie 1', div);
    };

    func();
}

/* Zadanie 2
Stwórz odpowiednie elementy i dodaj do strony listę ulubionych owoców (minimum 6) */
{
    function func() {
        let fruits = ['apples', 'oranges', 'grapefruits', 'mandarins', 'limes', 'bananas', 'plums'];
        let ul = document.createElement('ul');
        ul.setAttribute('id', 'fruits');

        fruits.forEach(function (fruit) {
            let li = document.createElement('li');
            li.innerText = fruit;
            ul.appendChild(li);
        });

        appendExercise('Zadanie 2', ul);
    };

    func();
}

/* Zadanie 3
Na podstawie listy z zadanie 2 stwórz event który usunie z tej listy co drugi element. */
{
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
    function func() {
        let button = document.createElement('button');
        button.innerText = 'Remove';

        button.addEventListener('click', function () {
            this.remove();
        });

        appendExercise('Zadanie 4', button);
    };

    func();
}

/* Zadanie 5
Na podstawie losowej liczby utwórz odpowiednią ilość divów z tekstem: "to jest div numer ${numer}" */
{
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

        appendExercise('Zadanie 5', df);
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

        function createElement(root, main) {

            function createLiElement(text) {
                let li = document.createElement('li');
                li.innerHTML = text;
                return li;
            }

            for (let node in root) {
                if (typeof (root[node]) === 'object') {
                    let li = createLiElement(node);
                    main.appendChild(li);
                    let newRoot = document.createElement('ul');
                    li.appendChild(newRoot);
                    createElement(root[node], newRoot);
                } else {
                    main.appendChild(createLiElement( node + ' : ' + root[node]));
                }
            }
        };

        createElement(structure, main);
        appendExercise('Zadanie 6', main);
    };

    func();
}

/* Zadanie 7
Stwórz dwie listy. W jednej umieść minim 6 elementów. Druga niech będzie pusta. Pod każdą z list dodaj button. Po kliknięciu na button pod listą ostatni element listy ma być przeniesiony do drugiej listy. 
Jeśli w danej liście nie ma żadnych elementów to button ma być zablokowany przy pomocy atrybutu disabled; */
{
    function func() {

        let checkList = function (containers) {
            for (let elem of containers) {
                let list = elem.querySelector('ul'),
                    button = elem.querySelector('button');

                if (list.children.length) {
                    if (button.hasAttribute('disabled')) {
                        button.removeAttribute('disabled');
                    }
                } else {
                    button.setAttribute('disabled', 'disabled');
                }

            }
        };

        let createButton = function (text) {
            let button = document.createElement('button');

            button.innerHTML = text;

            button.addEventListener('click', function (e) {
                let key = null,
                    container = e.target.parentElement.parentElement,
                    element = e.target.parentElement,
                    lastOption = e.target.previousElementSibling.lastElementChild;

                if (container.children[0] === element) {
                    key = 1;
                } else {
                    key = 0;
                }

                let list = e.target.parentElement.parentElement.children[key].children[0];
                list.appendChild(lastOption);

                checkList(e.target.parentElement.parentElement.children);

            });

            return button;
        };

        let createContainer = function () {
            let container = document.createElement('div');
            container.style.width = '50%';
            container.style.border = '1px solid rgba(0,0,0, .1)';
            container.style.padding = '10px';
            container.style.margin = '5px';

            return container;
        }

        let createList = function (values) {
            let df = document.createDocumentFragment(),
                container = createContainer(),
                list = document.createElement('ul'),
                button = createButton('Move');

            if (values.length) {
                for (let item of values) {
                    let option = document.createElement('li');
                    option.innerHTML = item;
                    list.appendChild(option);
                }
            } else {
                button.setAttribute('disabled', 'disabled');
            };

            container.appendChild(list);
            container.appendChild(button);
            df.appendChild(container);

            return df;
        }

        let df = document.createDocumentFragment(),
            container = document.createElement('div');

        container.style.display = 'flex';
        container.style.flexDirection = 'row';

        container.appendChild(createList([1, 2, 3, 4, 5, 6]));
        container.appendChild(createList([]));
        df.appendChild(container);

        appendExercise('Zadanie 7', df);
    }

    func();

}

/* Zadanie 8
Stwórz formularz do którego będzie można wpisać jaki element user chce utworzyć, z jakim tekstem, z kolorem tekstu i ile razy ma być ten element powtórzony na stronie. 
Po kliknięciu na button "Utwórz" formularz powinien tworzyć taką strukturę. */
{
    let form = document.createElement('form'),
        submit = document.createElement('button');

    form.appendChild(createFormElement('Tekst', 'message', 'text'));
    form.appendChild(createFormElement('Element', 'type', 'text'));
    form.appendChild(createFormElement('Kolor', 'color', 'color'));
    form.appendChild(createFormElement('Ilość powtórzeń', 'quantity', 'number'));

    submit.innerHTML = 'Create';
    submit.setAttribute('type', 'submit');
    submit.addEventListener('click', (e) => {
        e.preventDefault();

        let elements = e.target.parentElement.elements,
            root = e.target.parentElement.parentElement;

        let message = elements[0].value,
            type = elements[1].value,
            color = elements[2].value,
            quantity = parseInt(elements[3].value);

        if (message.length && type.length && color.length && !isNaN(quantity)) {
            for (let index = 0; index < quantity; index++) {
                let newElement = document.createElement(type);
                newElement.innerHTML = message;
                newElement.style.color = color;
                root.appendChild(newElement)
            }
        }

    });

    form.style.width = '300px';
    form.appendChild(submit);

    appendExercise('Zadanie 8', form);
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
    let createTemplate = function (withRemoveButton = false) {
        let template = document.createElement('div');

        template.style.marginBottom = '15px';

        template.appendChild(createFormElement('Imię', 'name', 'text'));
        template.appendChild(createFormElement('Nazwisko', 'suername', 'text'));
        template.appendChild(createFormElement('Wiek', 'age', 'number'));
        template.appendChild(createFormElement('Ilość dzieci', 'children', 'number'));

        if (withRemoveButton) {
            let remove = document.createElement('button');

            remove.innerHTML = 'Usuń';
            remove.style.margin = '5px';

            remove.addEventListener('click', e => {
                e.preventDefault();
                e.target.parentElement.remove();
            });

            template.appendChild(remove);
        }

        return template;
    };

    let getValues = function (e) {
        let formElements = Array.from(e.target.parentElement.elements);
        let elements = formElements.slice(0, formElements.length - 2);

        let values = [];
        let row = {};

        let splitValues = function (elements) {
            let element = elements.shift();

            if (element.type === 'submit') {
                values.push(row);
                row = {};
            } else {
                row[element.name] = element.value;
            }

            if (elements.length) {
                splitValues(elements);
            } else {
                values.push(row);
                row = {};
            }
        };

        splitValues(elements);

        return values;
    };

    let createTable = function (e) {
        let values = getValues(e),
            parentElement = e.target.parentElement.parentElement,
            table = document.createElement('table');

        let createHead = function () {
            let thead = document.createElement('thead');
            thead.innerHTML = `
                <tr >
                    <th>Imię</th>
                    <th>Nazwisko</th>
                    <th>Wiek</th>
                    <th>Ilość dzieci</th>
                </tr>`;

            return thead;
        };

        let createBody = function () {
            let tbody = document.createElement('tbody');

            for (let row of values) {
                tbody.innerHTML += `
                        <tr style='border-bottom: 1px solid RGBA(0,0,0, .2)'>
                            <td>${row.name}</td>
                            <td>${row.suername}</td>
                            <td>${row.age}</td>
                            <td>${row.children}</td>
                        </tr> `;
            }

            return tbody;
        }

        if (parentElement.querySelector('table')) {
            parentElement.querySelector('table').remove();
        }

        table.appendChild(createHead());
        table.appendChild(createBody());

        parentElement.appendChild(table);
    }

    let form = document.createElement('form'),
        submit = document.createElement('button'),
        add = document.createElement('button');

    form.style.width = '300px';
    form.appendChild(createTemplate());

    submit.innerHTML = 'Utwórz';
    submit.style.margin = '5px';
    submit.setAttribute('type', 'submit');
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        createTable(e);
    });

    add.innerHTML = 'Więcej';
    add.setAttribute('type', 'submit');
    add.addEventListener('click', (e) => {
        e.preventDefault();
        e.target.parentElement.prepend(createTemplate(true));
    });

    form.appendChild(submit);
    form.appendChild(add);

    appendExercise('Zadanie 9', form);
}

/* Zadanie 10
Na podstawie powyższego zadania stwórz funkcję która sprawdzi wszystkie stringi wpisane i zamieni pierwsze ich litery na duże. */
{

    function changeStrings() {
        let tds = document.querySelectorAll('table > tbody > tr > td');

        for (let td of tds) {

            if (isNaN(parseInt(td.innerHTML))) {
                td.innerHTML = td.innerHTML
                    .split('')
                    .map((a, index) => {
                        return index === 0 ? a.toUpperCase() : a
                    })
                    .join('')
            }
        }
    }

}

/* Zadanie 11
Stwóz funkcję która będzie przyjmować dowolny string. Sprawdź czy występują w nim liczby. Jeśli tak to podaj w konsoli ich sumę. Dodatkowo stwórz tyle divów z tym tekstem ile wynosi iloczyn tych liczb. */
{
    function checkStringText(text) {

        let getNumbers = function (text) {
            return regexResult(text, /\d*/gm)
                .map(a=> parseInt(a));
        }

        let numbers = getNumbers(text);
        let sum = numbers.length ?  numbers.reduce((a, b) => a+ b) : 0;
        let product = numbers.length ? numbers.reduce((a, b) => a * b) : 0;

        let createDivs = function(count) {
            let df = document.createDocumentFragment();
            
            for (let index = 0; index < count; index++) {
                let div  = document.createElement('div');
                div.style.display = 'inline-block';
                div.style.border = '1px solid RGBA(0,0,0, .1)';
                div.style.padding = '5px';
                div.style.margin = '2px';

                div.innerHTML = `Element ${index + 1}`;
                df.appendChild(div);
            }

            return df;
        }

        console.log(`Suma: ${sum}`);
        appendExercise('Zadanie 11', createDivs(product));
    };

}

/* Zadanie 12
Stwórz funkcję która przyjmuje dowolnego stringa. Następnie Wrzuć tego strina do obiektu pod dowolnym polem. 
Dopisz metodę do obiektu która będzie sprawdzać czy w tekście występuje string 'Ala' i jeśli tak to zamieni go na 'Ola'. 
Jeśli tekst nie występuje to niech utworzy odpowiedniego diva i doda do niego tekst "Słowo Ala nie występuje w tekście." */
{

    function checkStringTextWithAla(text) {
        let person = {
            name: text,
            checkName: function() {
                if(this.name.indexOf('Ala') !==  -1) {
                    this.name = this.name.replace("Ala", "Ola");
                    console.log(this.name);
                } else {
                    let div = document.createElement('div');
                    div.innerHTML = 'Słowo Ala nie występuje w tekście.';
                    appendExercise('Zadanie 12', div);
                }
            }
        }
        return person.checkName()
    }

    checkStringTextWithAla('asdasdasd');

}

/* Zadanie 13
Stwórz funkcję która przyjmie tablicę stringów. Funkcja ma zwrócić nową tablicę z ilością liter w strinach. 
Druga funkcja ma zsumować wszystkie liczby z tablicy i zwrócić wynik. Trzecia funkcja ma wyciągnąć średnią z liczb i zwrócić wynik. */
{
    console.log("---------- Zadanie 13 ----------");

    function getCharsFromArray(...args) {
        let result = [];
        
        for(let arr of args) {  
            for(let item of arr) {
                let string = regexResult(item, /[a-zA-Z]/gm);
                result.push(string.length);
            }
        }

        return result;
    }

    function sumCharsFromArray(values) {
        return values.reduce((a, b) => a + b, 0);
    };

    function avgCharsFromArray(values) {
        return values.reduce((a, b) => a + b, 0) / values.length
    };

    let result = getCharsFromArray(['xx', 'sdasd'], ['a', '12', '12312', 'sada1']);
    console.log(`Sum: ${sumCharsFromArray(result)}`);
    console.log(`Avg: ${avgCharsFromArray(result)}`);

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

    let myObj = {
        name: '',
        surname: '',
        age: ''
    };

    function updateMyObj(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.nameLength = name.length;
        this.surnameLength = name.length;
        this.ageLength = age.length;

        if(this.nameLength > 5 || this.surnameLength > 5 || this.ageLength > 5) {
            let btn = document.createElement('button');
            btn.innerHTML = 'Restore';
            btn.addEventListener('click', () => {
                this.name = '';
                this.surname = '';
                this.age = '';

                delete this.nameLength;
                delete this.surnameLength;
                delete this.ageLength;

                console.log(this);
            });
            appendExercise('Zadanie 14', btn);
        }

    }

   updateMyObj.call(myObj, 'Michal', 'Doe', '33');

   console.log(myObj);
}