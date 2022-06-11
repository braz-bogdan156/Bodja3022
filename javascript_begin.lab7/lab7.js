let choise = prompt('Viberyt number for zavdannya: 1;2;3 : ');
choise = parseInt(choise);
if (choise === 1) {
    function perevirka(Number) {
        console.log(typeof (Number))

        if (isNaN(Number) === false) {
            if (Number % 2 == 0) {
                console.log('Number is pair')
            }
            else {
                console.log('Number is not pair')
            }
        }
        else {
            console.log('Nepravylno')
        }
    }
    Number = prompt("Enter Number for 1 zavdaniya")
    perevirka(Number)
    
}
else if (choise === 2) {
    
    function polomka(){

        let array = [];
        let schotchik = 0;
        let bool = true;
        let suma = 0;
        for (let c = 1; c < 12; c++) {
            if (c === 1) {
                console.log("Skip 1,because code lomaetsya")
            }
            else {
                for (let i = 2; i < c; i++) {
                    if (c % i == 0) {
                        bool = false;
                        break; // выйдем из цикла
                    }
                    else {
                        bool = true;
                    }
                }

                if (bool == true) {
                    array.push(c);
                    schotchik++;
                }
                if (schotchik === 5) {
                    break;
                }
            }
        }
        console.log(array);
        for (let k = 0; k < 5; k++) {
            suma += array[k];
        }
        console.log(suma);
    }

    polomka();
}
else if (choise === 3) {
    let n = prompt('Enter Number for 3 zavdaniya');
    function suma_ryadu(n) {
        let s = 0;
        let b = '0';
        let pereobrazovatel;
        for (t = 0; t < n; t++) {
             b = b + "1";
            pereobrazovatel = parseInt(b);
            s += pereobrazovatel;
        }
        console.log(s)
    }
    suma_ryadu(n);
}
else {
    console.log('Eto neverno')
}
