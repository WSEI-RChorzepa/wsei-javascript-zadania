/* Zadanie 1
Napisz funkcję która wypisuje w konsoli "Udało się!" */
{
    console.log(" ---------- Zadanie 1 ----------");

    function func (){
        console.log('Udało się!');
    }

    func();
}

/* Zadanie 2
Napisz funkcję która przyjmuje dowolny parametr i wyświetla go w konsoli */
{
    console.log("\n---------- Zadanie 2 ----------"); 

    function func(message) {
        console.log(message);
    }

    func('Test message');

}

/* Zadanie 3
Napisz funkcję która przyjmuje jako parametr tablicę a następnie zwraca ją. */
{
    console.log("\n---------- Zadanie 3 ----------"); 

    function func(array) {
        if(Array.isArray(array)){
            return array;
        } else {
            throw Error("Invalid argument exception.")
        }
    }

    console.log(func(["a", "b", "c"]));
}

/* Zadanie 4
Napisz funkcję która przyjmie jako argument stringa a następnie co 3 sekundy będzie go wypisywać w konsoli. Po 5 razach ma przestać wypisywanie i zwrócić do konsoli napiś "Koniec". */ 
{
    console.log("\n---------- Zadanie 4 ----------"); 

    function func(message) {
        let counter = 1,
        range = 6;

        console.log(`${counter}: ${message}`);
        counter++;

        let interval = setInterval(()=>{
            if(counter === range) {
                clearInterval(interval);
                console.log('Koniec')
            } else {               
                console.log(`${counter}: ${message}`);
                counter++;
            }
        }, 3000)
    }

    func('Another test message');

}