import { Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router()

interface Todo {
  id: string;
  text: string;
}

let todos: Todo[] = []

router.get('/todos', (ctx) => {
  ctx.response.body = { todos: todos };
})

router.post('/todos', async (ctx) => {
  const { value } = ctx.request.body({type: 'json'})
  const { text } = await value
  const newTodo: Todo = {
    id: new Date().toISOString(),
    text: text
  };

  todos.push(newTodo)

  ctx.response.body = {message: 'Created todo!', todo: newTodo}

})

router.put('/todos/:todoId', (ctx) => {
  
})

router.delete('/todos/:todoId', (ctx) => {
  
})

export default router;