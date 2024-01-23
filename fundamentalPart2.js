// Challenge 1

// let calcAvg = (a,b,c)=> (a+b+c)/3;
// console.log("hello")

// let dolphinAvg = calcAvg(85,54,41);
// let koalaAvg = calcAvg(23,34,27);

// let checkWinner = function(dolphinAvg,koalaAvg){
//     dolphinAvg>koalaAvg*2?console.log(`Dolphin wins ${dolphinAvg} vs ${koalaAvg}`): koalaAvg>dolphinAvg*2?console.log(`Koala wins ${koalaAvg} vs ${dolphinAvg}`):console.log(`no winner`);
// }

// console.log(checkWinner(dolphinAvg,koalaAvg));

    // let checkWinner2 = function(dolphinAvg,koalaAvg){
    //     if(dolphinAvg>koalaAvg*2){
    //         console.log(`Dolphin wins ${dolphinAvg} vs ${koalaAvg}`);
    //     }else if(koalaAvg>dolphinAvg*2){
    //         console.log(`Koala wins ${koalaAvg} vs ${dolphinAvg}`);
    //     }else{
    //         console.log(`no winner`);
    //     }
    // }

    // console.log(checkWinner2(dolphinAvg,koalaAvg));




// Challenge 2 

// let bills = [ 125,555,44];

// let calcTip = function(bill){
//     return bill>=50 && bill<=300? bill*0.15 : bill*0.20;
// }

// let tip = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];

// console.log(`${bills} and ${tip}`);



// Challenge 3

// let markWeight = 78;
// let markHeight = 1.69;

// let johnWeight = 95;
// let johnHeight = 1.88;

// let markBmi = markWeight/markHeight**2;
// let johnBmi = johnWeight/johnHeight**2;

// let mark = {
//     fName : "Mark Miller",
//     mass:markWeight,
//     height:markHeight,
//     calcBmi: function () {
//         this.bmi = this.mass/this.height**2;
//         return this.bmi; 
//     }
// }

// let john = {
//     fName : "Mark Miller",
//     mass:johnWeight,
//     height:johnHeight,
//     calcBmi: function () {
//         this.bmi = this.mass/this.height**2;
//         return this.bmi; 
//     }
// }

// mark.calcBmi();
// john.calcBmi();

// if(mark.bmi>john.bmi){
//     console.log(`mark's BMI (${mark.bmi}) is higher than john's BMI (${john.bmi})`);
// }
// else{
//     console.log(`john's BMI (${john.bmi}) is higher than mark's BMI (${mark.bmi})`);
// }




// Challenge 4

let bills = [ 22, 295, 176, 440, 37, 105, 10, 1100, 86 , 52];
let tips = [];
let total = [];

let calcTip = function(bill){
    return bill>=50 && bill<=300? bill*0.15 : bill*0.20;
}

let calcTotal = function(bill){
    return bill>=50 && bill<=300? (bill*0.15)+bill : (bill*0.20)+bill;
}

for(let i=0;i<bills.length;i++){
    tips.push(calcTip(bills[i]));
    total.push(calcTotal(bills[i]));
}

console.log(tips);
console.log(total);

let calcAvg = function(arr){
    let sum = 0;
    for(let i=0;i<bills.length;i++){
       

        sum = sum + bills[i];
    }
    return sum/bills.length;
}

console.log(calcAvg(bills));
