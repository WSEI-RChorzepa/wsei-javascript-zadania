/* Zadanie 1
Wypisuj w konsoli co 3 sekundy napis "Cześć po raz " oraz liczbę powtóżeń. Jeśli Licznik dojdzie do 15 zatrzymaj go.  */
{
    console.log(" ---------- Zadanie 1 ----------");

    let counter = 1,
        range = 15;

    console.log(`Cześć por raz: ${counter}`);
    counter++;

    let interval = setInterval(() =>{

        if(counter > range){
            clearInterval(interval)
        } else {
            console.log(`Cześć por raz: ${counter}`);
            counter++;
        }
    }, 3000);
}

/* Zadanie 2
Po 2 sekundach od uruchomienia programu wyświetl w konsoli wszystkie elementy dowolnej tablicy. 
Następnie wyświetl w konsoli co 3 sekundy kolejny element tej tablicy. */
{
    console.log(" ---------- Zadanie 2 ----------");

    let arr = ['a', 'b', 'c', 'd', 'e', 'f'];

    setTimeout(()=>{
        console.log(`Wszystkie element tablicy: ${arr.join(", ")}`);

        let counter = 0;
        let interval = setInterval(() =>{

            if(counter >= arr.length){
                clearInterval(interval);
            } else {
                console.log(`Element tablicy ${counter} : ${arr[counter]}`);
                counter++;
            }
        }, 3000);
    }, 2000);
}