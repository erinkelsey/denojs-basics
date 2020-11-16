import { Application } from "https://deno.land/x/oak/mod.ts";

import todosRoutes from './routes/todos.ts'

const app = new Application();

// if running other middlewares, and there is async
// code, always use async/await, or else a response
// will be returned too early. Example:
// app.use(async (ctx, next) => {
//   console.log('Middleware')
//   await next()
// })

app.use(todosRoutes.routes())
app.use(todosRoutes.allowedMethods())

await app.listen({ port: 3000 });