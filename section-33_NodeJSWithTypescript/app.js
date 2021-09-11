"use strict";
const num1Element = document.getElementById('num1');
const num2Element = document.getElementById('num2');
/*
   ! => statement in front of it can be null but we know that it isn't
     => ignore the null case and take other value.
*/
const buttonElement = document.querySelector('button');
/* Generics type (type that interact with another type) => Array with value type */
const numResults = [];
const textResults = [];
/* | => Union type => using for optional type of variable */
function add(num1, num2) {
    /* Type guard */
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }
    return +num1 + +num2;
}
function printResult(resultObj) {
    console.log(resultObj.val);
}
buttonElement.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2);
    numResults.push(result);
    const stringResult = add(num1, num2);
    textResults.push(stringResult);
    console.log(printResult({ val: result, timestamp: new Date() }));
    console.log(numResults, textResults);
});
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('It worked!');
    }, 1000);
});
myPromise.then(result => {
    console.log(result.split('w'));
});
/*
Command in Typescript
tsc filename => compiled from ts file to js file
tsc --init => generated tsconfig.json to configuration typescript in project
tsc => if has tsconfig.json use this command to compiled all ts files to js file
*/ 
