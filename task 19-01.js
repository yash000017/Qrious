const arrayOfFruits = [
    {
      apple: 10,
      orange: 2,
      banana: 3,
    },
    {
      mango: 4,
      guava: 3,
      grapes: 9,
    },
    {
      papaya: 10,
      apple: 9,
      orange: 9,
    },
    {
      orange: 8,
      mango: 2,
      grapes: 3,
      customFruit: 9,
    },
  ];

function total(arrayOfFruits) {
  let dict = {};
  for(let i=0;i<arrayOfFruits.length;i++){

    const fruitObj = arrayOfFruits[i];
  
    for(const fruit in fruitObj){
        if(fruitObj.hasOwnProperty(fruit)){
          dict[fruit] = (dict[fruit] || 0) + fruitObj[fruit];
        }
    }
  }
  return dict;
}

const result =total(arrayOfFruits);
console.log(result)

