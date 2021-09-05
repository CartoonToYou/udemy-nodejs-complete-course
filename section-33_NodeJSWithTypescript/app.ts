const num1Element = document.getElementById('num1') as HTMLInputElement
const num2Element = document.getElementById('num2') as HTMLInputElement
/* 
   ! => statement in front of it can be null but we know that it isn't
     => ignore the null case and take other value.
*/
const buttonElement = document.querySelector('button')!

/* | => Union type => using for optional type of variable */
function add(num1: number | string, num2: number | string) {
  /* Type guard */
  if(typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 + num2;
  }
  else if(typeof num1 === 'string' && typeof num2 === 'string') {
    return num1 + ' ' + num2
  }
  return +num1 + +num2
}

buttonElement.addEventListener('click', () => {
  const num1 = num1Element.value;
  const num2 = num2Element.value
  const result = add(+num1, +num2)
  const stringResult = add(num1, num2)
  console.log(result)
  console.log(stringResult)
})

/*
Command in Typescript
tsc filename => compiled from ts file to js file
tsc --init => generated tsconfig.json to configuration typescript in project
tsc => if has tsconfig.json use this command to compiled all ts files to js file
*/