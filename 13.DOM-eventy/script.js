/* Zadanie 1
Stwórz następujące eventy i sprawdź co udostępnia ich obiekt event:

1. Kliknięcie w przycisk o id="test-event"
2. Ruch myszką na ekranie
3. Najechanie myszką na przycisk o id="test-event"
4. naciśnięcie klawisza na klawiaturze
5. scrollowanie strony w dół i w górę
6. zmianę tekstu w input id="input-test" */
{
    console.log("---------- Zadanie 1 ----------");

    document.querySelector('#test-event').addEventListener('click', (e) => console.info('test-event click', e));
    document.addEventListener('mousemove', (e) => console.info('body mousemove', e));
    document.querySelector('#test-event').addEventListener('mousemove', (e) => console.info('test-event mousemove', e));
    document.querySelector('body').addEventListener('keypress', (e) => console.info('body keypress', e));
    document.addEventListener('scroll', (e) => console.info('body scroll', e));
    document.querySelector('#input-test').addEventListener('change', (e) => console.info('input-test change', e));
}

/* Zadanie 2
Napisz funkcję która po kliknięciu na button id="ex2" pobierze tekst z jego data atrybutu a następnie wpisze ten tekst do spanu który jest poniżej. */
{
    console.log("\n---------- Zadanie 2 ----------");

    document.querySelector('#ex2').addEventListener('click', (e) => {
        let text = e.target.attributes['data-text'].value;
        e.target.nextElementSibling.innerText = text;
    });
}

/* Zadanie 3
Napisz funkcję która po najechaniu na czerwony kwadrat zmieniu jego kolor na niebieski. 
Następnie po zjechaniu myszki z obszaru kwadratu zmieni się z powrotem na czerwony. */
{
    console.log("\n---------- Zadanie 3 ----------");

    document.querySelector('#ex3').addEventListener('mouseenter', (e) => e.target.style.backgroundColor = 'blue');
    document.querySelector('#ex3').addEventListener('mouseleave', (e) => e.target.style.backgroundColor = 'red');
}

/* Zadanie 4
Napisz funkcję walidacyjną dla input id="input-test". Funkcja ma za zadanie sprawdzać co jest wpisane w inputa. 
Jeśli user wpisze jakąś cyfrę pokaż mu komunikat błędu pod inputem informujący że nie może wpisywać cyfr. */
{
    console.log("\n---------- Zadanie 4 ----------");

    document.querySelector('#input-test').addEventListener('keydown', (e) => {
        if (e.code.includes('Digit')) {
            e.preventDefault();
            document.querySelector('#ex3-err').innerHTML = 'This input accept only characters.';
        }
    });
}

/* Zadanie 5
Napisz funkcję countera. Funkcja ma za zadanie wpisywać do spanu w divie id="ex5" numerka odpowiadającego ilości kliknięć w button id="ex5-button". 
Jeśli licznik dojdzie do 10 event powinien być usunięty. */
{
    console.log("\n---------- Zadanie 5 ----------");

    function func() {
        let counter = 0,
            currentValue = document.querySelector('#ex5').innerHTML,
            getButton = () => document.querySelector('#ex5-button'),
            getSpan = () => document.querySelector('#ex5');

        let count = () => {
            if (counter === 10) {
                getButton().removeEventListener('click', count, true);
            } else {
                counter++;
                getSpan().innerHTML = counter;
            }
        };

        if (!currentValue.length) {
            getSpan().innerHTML = counter;
        }

        getButton().addEventListener('click', count);

    };

    func();
}

/* Zadanie 6
Napisz funkcję która będzie obserwowac scroll strony. 
Jeśli scroll zjedzie poniżej 200px zmień kolor strony na czerwony. Jeśli będzie powyżej 200px niech zmieni kolor na biały. */
{
    console.log("\n---------- Zadanie 6 ----------");

    document.addEventListener('scroll', e => {
        if (window.scrollY > 200) {
            document.querySelector('body').style.background = 'red';
        } else {
            document.querySelector('body').style.background = 'white';
        }
    });

}

/* Zadanie 7
Napisz obsługę kalkulatora. Dodaj odpowiednie eventy do przycisków. Wynik wyświetlaj w inpucie. Staraj się aby funkcje były reużywalne. */
{
    console.log("\n---------- Zadanie 7 ----------");

    function Memory() {
        let _state = [];
        let _observers = [];

        Object.defineProperty(this, 'state', {
            get: () => _state,
            set: state => {
                _state = state;
                _notify(_state)
            }
        });

        Object.defineProperty(this, 'last', {
            get: () => _state[_state.length - 1]
        });

        Object.defineProperty(this, 'length', {
            get: () => _state.length
        });

        this.addObserver = observer => {
            _observers.push(observer);
        };

        this.removeObserver = observer => {
            _observers = _observers.filter(a => a !== observer);
        }

        let _notify = (state) => {
            for (let observer of _observers) {
                observer(state);
            }
        }
    };


    function Calculator({ input, numbers, operators }) {
        this.operators = operators;
        this.numbers = numbers;
        this.input = input;
        this.memory = new Memory();
        this.displayResult = false;

        this.initializeNumbers();
        this.initializeOperators();

        this.memory.addObserver(state => this.displayHistory(state));
        this.memory.addObserver(state => this.updateDescription(state));
        this.memory.addObserver(state => this.calculate(state));
    };

    Calculator.prototype.initializeNumbers = function () {
        this.numbers.forEach(number => {
            number.addEventListener('click', e => {

                if (this.memory.length) {
                    if (this.memory.last.key === 'digit') {
                        this.memory.last.value += e.target.innerHTML;
                        this.memory.state = [
                            ...this.memory.state,
                        ];

                    } else {
                        this.memory.state = [...this.memory.state, {
                            key: 'digit',
                            value: e.target.innerHTML
                        }];
                    }
                } else {
                    this.memory.state = [...this.memory.state, {
                        key: 'digit',
                        value: e.target.innerHTML
                    }];
                }

            });
        });
    };

    Calculator.prototype.initializeOperators = function () {
        this.operators.forEach(operator => {
            operator.addEventListener('click', e => {
                if (this.memory.length) {
                
                    if(this.memory.last.key === 'operator') {
                        this.memory.last.value = e.target.innerHTML;
                        this.memory.state = [
                            ...this.memory.state,
                        ];
                    } else {
                        this.memory.state = [...this.memory.state, {
                            key: 'operator',
                            value: e.target.innerHTML
                        }];
                    }
                };

            });
        });
    };

    Calculator.prototype.updateDescription = function (state) {
        window.state = state;
        for (let item of [...state].reverse()) {
            if (item.key === 'digit' && !this.displayResult) {
                this.input.value = item.value;
                break;
            } else {
                continue;
            }
        };
    };

    Calculator.prototype.displayHistory = function (state) {
        document.querySelector('#calculator-history').innerHTML = state.map(a => a.value).join(' ');
    }

    Calculator.prototype.calculate = function (state) {
        if (this.memory.last.key === 'digit' && state.length > 1) {

            let values = state.filter(a => a.key === 'digit').map(a => parseInt(a.value));
            let operators = state.filter(a => a.key === 'operator').map(a => a.value);

            operators.unshift('+');

            let result = 0;

            function make(values, operators) {

                let value = values.shift();
                let operator = operators.shift();

                switch (operator) {
                    case '+':
                        result += value;
                        break;
                    case '-':
                        result -= value;
                        break;
                    case '*':
                        result *= value;
                        break;
                    case '/':
                        result /= value;
                        break;
                }

                if (values.length) {
                    make(values, operators);
                }

            };

            make(values, operators);

            this.input.value = result;
            this.displayResult = true;
        }
    };

    let calc = new Calculator({
        input: document.querySelector('#calculator').children[0],
        numbers: document.querySelector('#calculator').children[3].querySelectorAll('button'),
        operators: document.querySelector('#calculator').children[4].querySelectorAll('button')
    });

}
