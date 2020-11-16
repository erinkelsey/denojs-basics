# Todo Frontend

Frontend for the Deno Todo REST API built with React.

### Install

    $ npm install

### Setup

Create a .env file in the same directory as this README, with the following environment variable(s):

    REACT_APP_HOST_URL=http://localhost:8000

### Start

    $ npm start

### Deploy to Heroku

1.  Create a Procfile with the following:

        web: deno run --allow-net --allow-write --allow-read --allow-plugin --allow-env --unstable --no-check app.ts

2.  On the Heroku Dashboard, create a new application
3.  On the new application, go to the Settings page
4.  Click the Add buildpack button
5.  Enter the following URL in the input box:

        https://github.com/chibat/heroku-buildpack-deno.git

6.  Add your environment variables to under Settings -> Config Vars

7.  Log in to heroku

        $ heroku login

8.  Initialize Heroku git with your app

        $ heroku git:remote -a <your-app-name>

9.  Commit your code

        $ git add .
        $ git commit -am 'commit message'
        $ git push heroku master

10. Logs for server

        $ heroku logs --tail
