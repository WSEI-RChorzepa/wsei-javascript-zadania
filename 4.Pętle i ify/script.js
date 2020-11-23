/* Zadanie 1
W konsoli stwórz dwie zmienne przechowujące liczby. Następnie za pomocą instrukcji warunkowej ```if ... else ```, wypisz w konsoli, która z nich jest większa. */
{
    console.log(" ---------- Zadanie 1 ----------");

    let number = 23,
        secondNumber = 43;

    if (number > secondNumber) {
        console.log(`Result: ${number}`);
    } else {
        console.log(`Result: ${secondNumber}`);
    } 
}

/* Zadanie 2
W konsoli stwórz trzy zmienne przechowujące liczby. Następnie za pomocą instrukcji warunkowej **if**, **else if** i **else**
wypisz w konsoli, która z nich jest największa. */
{
    console.log(" \n---------- Zadanie 2 ----------");

    let number = 123,
        secondNumber = 164,
        thirdNumber = 250;

    if (thirdNumber > secondNumber) {
        console.log(`Result: ${thirdNumber}`);
    } else if (secondNumber > number) {
        console.log(`Result: ${secondNumber}`);
    } else {
        console.log(`Result: ${number}`);
    }
}

/* Zadanie 3
W konsoli stwórz pętle, która 10 razy wypisze w konsoli tekst "Lubię JavaScript". */
{
    console.log(" \n---------- Zadanie 3 ----------");

    for (let i = 0; i < 10; i++) {
        console.log(`${i} Lubię JavaScript`);
    }
}

/* Zadanie 4
W konsoli stwórz zmienną ```result``` i przypisz do niej liczbę 0. Następnie stwórz pętle, która doda do siebie liczby od 1 do 10. */
{
    console.log(" \n---------- Zadanie 4 ----------");

    let result = 0;

    for (let i = 1; i <= 10; i++) {
        result += i;
    }

    console.log(`Result: ${result}`);
}

/* Zadanie 5
W konsoli napisz program, który na podstawie wartości zmiennej np. ```var n = 5;``` wypisuje wszystkie liczby od zera do **n**.
Przy każdej liczbie program ma napisać, czy  liczba jest parzysta czy nie. Np.:

```JavaScript
0 – parzysta
1 – nieparzysta
2 – parzysta
3 – nieparzysta
...
``` */
{
    console.log(" \n---------- Zadanie 5 ----------");

    let variable = 21

    for (let i = 0; i < variable; i++) {
        console.log(`${i} - ${i % 2 ? 'nieparzysta' : 'parzysta'}`);
    }
}

/* Zadanie 6
W konsoli stwórz dwie pętle niezależne i wypisz wartości ich liczników w każdej iteracji. Wykorzystaj:
konkatenację np.

```JavaScript
console.log("i= " + i + ", j= " + j);
``` */
{
    console.log(" \n---------- Zadanie 6 ----------");

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < i; j++) {
            console.log("i= " + i + ", j= " + j);
        }
    }
}

/* Zadanie 7
FizzBuzz - wypisz w consoli liczby od 0 do 100. Zamiast każdej podzielnej liczby przez 3 wypisz "Fizz", zamiast każdej podzielnej liczby przez 5 wypisz "Buzz" a zamiast każdej podzielnej liczby przez 3 i przez 5 wypisz "FizzBuzz"

Przykład:

```
0 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz ....
``` */
{
    console.log(" \n---------- Zadanie 7 ----------");

    for (i = 1; i < 100; i++) {
        if (i % 15 == 0)
            console.log(`FizzBuzz: ${i}`);
        else if (i % 3 == 0)
            console.log(`Fizz: ${i}`);
        else if (i % 5 == 0)
            console.log(`Buzz: ${i}`);
    }
}

/* Zadanie 8
Narysuj w konsoli:

a)
```
*
**
***
****
*****
```

b)
```
    *
   * *
  * * *
 * * * *
* * * * *
```

c)
```
    *
   ***
  *****
 *******
*********
```

d)
```
*1234
**234
***34
****4
*****
-----
*****
****4
***34
**234
*1234
```

e)
```
    *
   * *
  * * *
 * * * *
* * * * *
    *
    *
    *
``` */

{
    console.log(" \n---------- Zadanie 8 ----------");

    {
        console.log(" \n---------- a) ----------");

        for (let i = 0; i < 5; i++) {
            let row = "";

            for (let j = 0; j <= i; j++) {
                row += "*";
            }
            console.log(row);
        }
    }

    {
        console.log(" \n---------- b) ----------");

        let levels = 7,
            star = '* ';

        for (let x = 1; x < levels; x++) {
            let result = '';

            for (j = x; j < levels; j++) {
                result += ' ';
            }


            for (z = 1; z < x; z++) {
                result += star;
            }
            console.log(result);
        }
    }

    {
        console.log(" \n---------- c) ----------");

        let levels = 6,
            star = '*';

        for (let x = 1; x < levels; x++) {
            let result = '';

            for (j = x; j < levels; j++) {
                result += ' ';
            }


            for (z = 1; z < 2 * x; z++) {
                result += star;
            }
            console.log(result);
        }

    }

    {
        console.log(" \n---------- d) ----------");

        let levels = 5,
            stringResult = [];

        for (let index = 0; index < levels; index++) {
            let upperIndex = index + 1;
            let result = "*".repeat(upperIndex);

            for (let j = upperIndex; j < levels; j++) {
                result += j
            }

            stringResult.push(result); 
        }

        console.log(stringResult.join("\n"));

        console.log(" \n---------- e) ----------");

        console.log(stringResult.reverse().join("\n"));
    }

    {
        console.log(" \n---------- e) ----------");
    
        let levels = 6,
            star = '* ';
    
        for (let x = 1; x <= levels; x++) {
            let result = '';
    
            for (j = x; j <= levels; j++) {
                result += ' ';
            }
    
            for (z = 1; z < x; z++) {
                result += star;
            }
    
            if(x === levels){
              
                let spaces = Math.floor(result.length / 2);
                
                for (let i = 0; i <= 2; i++) {
                    result += '\n' + ' '.repeat(spaces) + '*';
                }
    
            }
    
            console.log(result);
        }
    }

}