import { Application } from "https://deno.land/x/oak/mod.ts";

import todosRoutes from './routes/todos.ts'
import { connect } from './helpers/db_client.ts'

/**
 * Initialize connection to MongoDB database. 
 */
connect()

/**
 * Create the Deno app. 
 */
const app = new Application();

// if running other middlewares, and there is async
// code, always use async/await, or else a response
// will be returned too early. Example:
// app.use(async (ctx, next) => {
//   console.log('Middleware')
//   await next()
// })

/**
 * Middleware for handling CORS for React frontend
 */
app.use( async (ctx, next) => {
  ctx.response.headers.set('Access-Control-Allow-Origin', '*')
  ctx.response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  ctx.response.headers.set('Access-Control-Allow-Headers', 'Content-Type')
  await next()
})

/**
 * Register the Todo routes
 */
app.use(todosRoutes.routes())
app.use(todosRoutes.allowedMethods())

/** 
 * Start server, listening on 8000
 */
await app.listen({ port: 8000 });