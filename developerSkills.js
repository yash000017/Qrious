// Remember, we're gonna use strict mode in all scripts now!
'use strict';

let name =

let data = [12, 5, -5, 0, 4];

function printForecast(data){
    for(let i=0;i<data.length;i++){
        console.log(`${data[i]}C in ${i+1} days`);
    }
}

printForecast(data);