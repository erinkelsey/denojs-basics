# Todo REST API - Deno

An example Deno REST API built with Oak Framework.

Oak Framework: https://deno.land/x/oak@v6.3.2

### Install

Deno modules will be downloaded when the app is run.

### Run

    $ deno run --allow-net app.ts

NOTE: you need the --allow-net permission to create the server

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
