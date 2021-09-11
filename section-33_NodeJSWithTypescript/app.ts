const num1Element = document.getElementById('num1') as HTMLInputElement
const num2Element = document.getElementById('num2') as HTMLInputElement
/* 
   ! => statement in front of it can be null but we know that it isn't
     => ignore the null case and take other value.
*/
const buttonElement = document.querySelector('button')!

/* Generics type (type that interact with another type) => Array with value type */
const numResults: Array<number> = []
const textResults: string[] = []

/* Type aliases & Interface => declare custom date type in TS */
type NumOrString = number | string
type Result = {val: number; timestamp: Date}
interface ResultObj {
  val: number;
  timestamp: Date
}

/* | => Union type => using for optional type of variable */
function add(num1: NumOrString, num2: NumOrString) {
  /* Type guard */
  if(typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 + num2;
  }
  else if(typeof num1 === 'string' && typeof num2 === 'string') {
    return num1 + ' ' + num2
  }
  return +num1 + +num2
}

function printResult(resultObj: ResultObj) {
  console.log(resultObj.val)
}

buttonElement.addEventListener('click', () => {
  const num1 = num1Element.value;
  const num2 = num2Element.value
  const result = add(+num1, +num2)
  numResults.push(result as number)
  const stringResult = add(num1, num2)
  textResults.push(stringResult as string)
  console.log(printResult({val: result as number, timestamp: new Date()}))
  console.log(numResults, textResults)
})

const myPromise = new Promise<string>((resolve,reject) => {
  setTimeout(() => {
    resolve('It worked!')
  }, 1000)
})

myPromise.then(result => {
  console.log(result.split('w'))
})

/*
Command in Typescript
tsc filename => compiled from ts file to js file
tsc --init => generated tsconfig.json to configuration typescript in project
tsc => if has tsconfig.json use this command to compiled all ts files to js file
*/