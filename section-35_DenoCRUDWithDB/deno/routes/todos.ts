import { Router } from 'https://deno.land/x/oak/mod.ts';
import { ObjectId } from "https://deno.land/x/mongo@v0.22.0/mod.ts";

import { getDb } from "../helpers/db_client.ts"

const router = new Router();

/* ? => optional properties */
interface Todo {
  id?: string;
  text: string;
}

interface TodoSchema {
  _id: {$oid: string};
  text: string;
}

let todos: Todo[] = [];

router.get('/todos', async (ctx) => {
  const todos = await getDb().collection<TodoSchema>('todos').find(); // { _id: ObjectId(), text: '...' }[]
  const transformedTodos = todos.map((todo: { _id: ObjectId, text:string }) => {
    return {
      id: todo._id.$oid,
      text: todo.text
    }
  })
  ctx.response.body = { todos: transformedTodos };
});

router.post('/todos', async (ctx) => {
  const { value } = ctx.request.body({type: 'json'});
  const { text } = await value
  const newTodo: Todo = {
    // id: new Date().toISOString(),
    text: text,
  };

  const id = await getDb().collection('todos').insertOne(newTodo);

  newTodo.id = id.$oid

  ctx.response.body = { message: 'Created todo!', todo: newTodo };
});

router.put('/todos/:todoId', async (ctx) => {
  const tid = ctx.params.todoId;
  const {value} = ctx.request.body({type: 'json'});
  const {text} = await value
  const todoIndex = todos.findIndex((todo) => {
    return todo.id === tid;
  });
  todos[todoIndex] = { id: todos[todoIndex].id, text: text };
  ctx.response.body = { message: 'Updated todo' };
});

router.delete('/todos/:todoId', (ctx) => {
  const tid = ctx.params.todoId;
  todos = todos.filter((todo) => todo.id !== tid);
  ctx.response.body = { message: 'Deleted todo' };
});

export default router;
