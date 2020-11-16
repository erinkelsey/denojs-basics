import { Router } from "https://deno.land/x/oak/mod.ts"
import { ObjectId, WithID } from "https://deno.land/x/mongo@v0.13.0/mod.ts";

import { getDb } from '../helpers/db_client.ts'

const router = new Router()

/**
 * Model for a Todo
 */
interface Todo {
  _id?: string
  text: string
}

/**
 * MongoDB schema for Todo
 */
interface TodoSchema extends WithID { text: string }

/**
 * GET method for /todos route. 
 * 
 * Gets all todos in the todos collection. 
 */
router.get('/todos', async ctx => {
  const todos = await getDb().collection<TodoSchema>('todos').find() // { _id: ObjectId(), text: '... }[]
  const transformedTodos = todos.map((todo: { _id: ObjectId; text: string }) => {
    return { id: todo._id.$oid, text: todo.text }
  })
  ctx.response.body = { todos: transformedTodos }
})

/**
 * POST method for /todos route. 
 * 
 * Adds a new todo to the todos collection. 
 * 
 * Returns the newly created todo as a response. 
 */
router.post('/todos', async ctx => {
  const result = ctx.request.body()
  const data =  await result.value
  const newTodo: Todo = {
    text: data.text
  }

  const id = await getDb().collection('todos').insertOne(newTodo)

  newTodo._id = id.$oid

  ctx.response.body = { message: 'Created todo!', todo: newTodo }
})

/** 
 * PUT method for /todos/:todoId method. 
 * 
 * Updates an existing todo in todos collection with the ID of todoId. 
 */
router.put('/todos/:todoId', async ctx => {
  const todoId = ctx.params.todoId! 
  const result = ctx.request.body()
  const data =  await result.value

  await getDb()
    .collection('todos')
    .updateOne( { _id: ObjectId(todoId) }, { $set: { text: data.text } } )
  
  ctx.response.body = { message: 'Updated todo' }
})

/** 
 * DELETE method for /todos/:todoId method. 
 * 
 * Deletes an existing todo from todos collection with the ID of todoId. 
 */
router.delete('/todos/:todoId', async ctx => {
  const todoId = ctx.params.todoId!
  
  await getDb().collection('todos').deleteOne({ _id: ObjectId(todoId) })

  ctx.response.body = { message: 'Deleted todo' }
})

export default router