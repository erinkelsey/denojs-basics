# Todo REST API - Deno

An example Deno REST API built with Oak Framework. Uses MongoDB as the database, with the mongo module for the MongoDB driver for Deno. Uses dotenv to handling environment variables.

Oak Framework: https://deno.land/x/oak@v6.3.2
deno_mongo: https://deno.land/x/mongo@v0.13.0
dotenv: https://deno.land/x/dotenv@v0.5.0

Full-app: http://deno-todoapp.s3-website.ca-central-1.amazonaws.com
REST API: https://todoapp-deno.herokuapp.com/

### Install

Deno modules will be downloaded when the app is run.

### Setup

In the same directory as this README, create a .env file with the following environment variable(s):

    MONGODB_SRV_CONNECTION=your_mongo_db_server_connection
    MONGODB_DB=your_db_name

### Run

    $ deno run --allow-net --allow-write --allow-read --allow-plugin --allow-env --unstable --no-check app.ts

#### Important

You need the --allow-net permission to create the server, and access MongoDB. Because the plug-in API of Deno is still in an unstable state, the --unstable flag needs to be used. The minimum permissions required to run deno_mongo should be those in the run command above.

### REST API Endpoints

<table>
    <thead>
        <tr>
            <th>Method</th>
            <th>Route</th>
            <th>Description</th>
        </tr>
    </thead>
    <tr>
        <td>GET</td>
        <td>/todos</td>
        <td>Get all of the todos.</td>
    </tr>
    <tr>
        <td>POST</td>
        <td>/todos</td>
        <td>Add a new todo.</td>
    </tr>
    <tr>
        <td>PUT</td>
        <td>/todos/:todoId</td>
        <td>Replaces the entire todo with the specific ID.</td>
    </tr>
    <tr>
        <td>DELETE</td>
        <td>/todos/:todoId</td>
        <td>Deletes a todo with the specific ID.</td>
    </tr>
</table>

NOTE: make sure that your request body is application/json

### Frontend for REST API

There is a React frontend for this API in the todo_frontend_react folder. Follow the instructions in the README file to run.
